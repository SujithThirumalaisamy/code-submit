import axios from "axios";
import CodeSnippet from "../components/CodeSnippet";
import Navbar from "../components/Navbar";
import { languages } from "../data/compiler";
import "./Submissions.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { setUser } from "../features/globalSlice";

export default function Submissions() {
  const [datas, setDatas] = useState([]);
  const globalState = useSelector((state) => state.globalSlice);
  const dispatch = useDispatch();
  const cookies = new Cookies(null, { path: "/" });
  useEffect(() => {
    const user = cookies.get("CodeSubmitUser");
    dispatch(setUser(user));
    axios
      .get(
        import.meta.env.VITE_BACKEND_URL +
          `?username=${user}`
      )
      .then((res) => {
        setDatas(res.data);
      });
  }, []);
  const getTime = (date) => {
    return new Date(date).toISOString().split("T")[1].split(".")[0];
  };

  const getLanguage = (langID) => {
    var ans = undefined;
    languages.forEach((language) => {
      if (langID == language.id) {
        ans = language.languageName.split("(")[0];
      }
    });
    return ans || -1;
  };

  return (
    <div className="submission-page">
      <Navbar title={"Your Recent Submissions"} />
      <table className="table-auto submission-table">
        <thead>
          <tr className="heading-row">
            <th>Submission ID</th>
            <th>Username</th>
            <th>Language</th>
            <th>Source Code</th>
            <th>Std Out</th>
            <th>Submission Time</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data) => {
            return (
              <tr key={data.submissionID}>
                <td key={data.submissionID + "1"}>{data.id.slice(-10)}</td>
                <td key={data.submissionID + "2"}>{data.username}</td>
                <td key={data.submissionID + "3"}>
                  {getLanguage(data.languageID)}
                </td>
                <td>
                  <CodeSnippet code={data.code} />
                </td>
                <td key={data.submissionID + "5"}>{data.output}</td>
                <td key={data.submissionID + "4"}>
                  {getTime(data.submissionTime)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
