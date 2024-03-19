import { Editor } from "@monaco-editor/react";
import { options } from "../data/editorOptions";
import { useDispatch, useSelector } from "react-redux";
import { codeChange } from "../features/globalSlice";
import Navbar from "./Navbar";
import Console from "./Console";
import { useState } from "react";

export const CodeEditor = () => {
  const globalState = useSelector((state) => state.globalSlice);
  const dispatch = useDispatch();
  const setCode = (code) => {
    dispatch(codeChange(code));
  };
  const [isConsoleOpen, setIsConsoleOpen] = useState(true);
  const [isInput, setIsInput] = useState(true);
  return (
    <div className="code-editor">
      <Navbar isConsoleOpen={isConsoleOpen} setIsConsoleOpen={setIsConsoleOpen} isInput={isInput} setIsInput={setIsInput}/>
      <Editor
        height={"92vh"}
        width={"100vw"}
        defaultLanguage={globalState.currentLanguage.languageCode}
        value={globalState.editorCode}
        onChange={setCode}
        theme={globalState.isDarkMode ? "vs-dark" : "vs-light"}
        options={options}
        path={globalState.currentLanguage.languageCode}
      />
      <Console isConsoleOpen={isConsoleOpen} setIsConsoleOpen={setIsConsoleOpen} isInput={isInput} setIsInput={setIsInput}/>
    </div>
  );
};
