import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Hourglass } from "react-loader-spinner";
import {
  consoleChange,
  setConsoleInput,
  setConsoleOpen,
} from "../features/globalSlice";
import axios, { AxiosRequestConfig } from "axios";
import { AppDispatch, GlobalState } from "../app/store";

// type DbDataType = {
//     username:string,
//     languageID: number,
//     code: string,
//     input: string,
//     submissionTime:number,
//     output: string,
// }

function RunButton() {
  const globalState: GlobalState = useSelector<GlobalState>((state) => state.globalSlice);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
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
      dispatch(setConsoleOpen(true));
      dispatch(setConsoleInput(false));

      if (responseData.status.id !== 3) {
        toast.error("Oops! Something Gone Wrong.");
        return;
      } else {
        toast.success("Code Executed Succesfully!");
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
  const sendSubmission = (stdout: string) => {
    if (stdout == "") {
      return;
    }
    const currentTime = new Date();
    const submissionTime = currentTime.toISOString();
    const data: string = JSON.stringify({
      username: globalState.currentUser,
      languageID: globalState.currentLanguage.id,
      code: globalState.editorCode,
      input: globalState.editorInput,
      submissionTime,
      output: stdout,
    });

    const config: AxiosRequestConfig = {
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
