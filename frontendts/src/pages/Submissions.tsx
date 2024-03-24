/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import CodeSnippet from "../components/CodeSnippet";
import Navbar from "../components/Navbar";
import { languages } from "../data/compiler";
import "./Submissions.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { setUser } from "../features/globalSlice";
type dataType = {
  id: string;
  username: string;
  languageID: number;
  code: string;
  input: string;
  submissionTime: string;
  output: string;
};
export default function Submissions() {
  const [datas, setDatas] = useState<Array<dataType>>([]);
  const dispatch = useDispatch();
  const cookies = new Cookies(null, { path: "/" });
  useEffect(() => {
    const user = cookies.get("CodeSubmitUser");
    dispatch(setUser(user));
    axios
      .get(import.meta.env.VITE_BACKEND_URL + `?username=${user}`)
      .then((res) => {
        setDatas(res.data);
      });
  }, []);
  function getTime(date: string) {
    return new Date(date).toISOString().split("T")[1].split(".")[0];
  }

  const getLanguage = (langID: number) => {
    let ans = undefined;
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
              <tr key={data.id}>
                <td key={data.id + "1"}>{data.id.slice(-10)}</td>
                <td key={data.id + "2"}>{data.username}</td>
                <td key={data.id + "3"}>{getLanguage(data.languageID)}</td>
                <td>
                  <CodeSnippet code={data.code} />
                </td>
                <td key={data.id + "5"}>{data.output}</td>
                <td key={data.id + "4"}>{getTime(data.submissionTime)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
