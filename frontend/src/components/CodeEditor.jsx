import { Editor } from "@monaco-editor/react";
import { options } from "../data/editorOptions";
import { useDispatch, useSelector } from "react-redux";
import { codeChange } from "../features/globalSlice";
import Console from "./Console";
import EditorNavbar from "./EditorNavbar";

export const CodeEditor = () => {
  const globalState = useSelector((state) => state.globalSlice);
  const dispatch = useDispatch();
  const setCode = (code) => {
    dispatch(codeChange(code));
  };
  return (
    <div className="code-editor">
      <EditorNavbar />
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
      <Console />
    </div>
  );
};
