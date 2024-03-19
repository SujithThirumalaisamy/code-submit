import { Editor } from "@monaco-editor/react";
import React from "react";
import { options } from "../data/editorOptions";
import { useDispatch, useSelector } from "react-redux";
import { codeChange } from "../features/globalSlice";
import Navbar from "./Navbar";
import Console from "./Console";

export const CodeEditor = ({ isSideBarOpen, isConsoleOpen }) => {
  const globalState = useSelector((state) => state.globalSlice);
  const dispatch = useDispatch();
  const setCode = (code) => {
    dispatch(codeChange(code));
  };
  return (
    <div className="code-editor">
      <Navbar />
      <Editor
        height="93vh"
        width={"100vw"}
        defaultLanguage={globalState.currentLanguage.languageCode}
        value={globalState.editorCode}
        onChange={setCode}
        theme={globalState.isDarkMode ? "vs-dark" : "vs-light"}
        options={options}
        path={globalState.currentLanguage.languageCode}
      />
      <Console />
    </div>
  );
};
