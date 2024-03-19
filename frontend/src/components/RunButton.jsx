import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Hourglass } from "react-loader-spinner";
import { consoleChange } from "../features/globalSlice";
import axios from "axios";

function RunButton({ setIsConsoleOpen, setIsInput }) {
  const globalState = useSelector((state) => state.globalSlice);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const submitCode = async () => {
    setLoading(true);
    try {
      const response = await fetch(import.meta.env.VITE_JUDGE_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-rapidapi-key": import.meta.env.VITE_JUDGE_API_KEY,
          "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
        },
        body: JSON.stringify({
          source_code: globalState.editorCode,
          language_id: globalState.currentLanguage.id,
          stdin: globalState.editorInput || "",
        }),
      });

      const responseData = await response.json();

      setIsConsoleOpen(true);
      setIsInput(false);
      toast.success("Code Executed Succesfully!");

      if (responseData.stdout == null) {
        return;
      } else {
        dispatch(
          consoleChange(globalState.editorConsole + responseData.stdout)
        );
        sendSubmission(responseData.stdout);
      }
    } catch (error) {
      toast.error("Error submitting code:" + error);
    } finally {
      setLoading(false);
    }
  };
  const sendSubmission = (stdout) => {
    if (stdout == "") {
      return;
    }
    const currentTime = new Date();
    const submissionTime = currentTime.toISOString();
    let data = JSON.stringify({
      username: globalState.currentUser,
      languageID: globalState.currentLanguage.id,
      code: globalState.editorCode,
      input: globalState.editorInput,
      submissionTime,
      output: stdout,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_BACKEND_URL,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then(() => {
        toast.success("Result saved to Cloud");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <button
      className="text-white font-medium rounded run-button"
      onClick={submitCode}
    >
      {loading ? (
        <Hourglass
          visible={true}
          height="24px"
          width="30px"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#ffffff", "#ffffff"]}
        />
      ) : (
        "Run"
      )}
    </button>
  );
}
export default RunButton;
