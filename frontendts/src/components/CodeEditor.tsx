import { Editor } from "@monaco-editor/react";
import { options } from "../data/editorOptions";
import { useDispatch, useSelector } from "react-redux";
import { codeChange } from "../features/globalSlice";
import EditorNavbar from "./EditorNavbar";
import AppWorkspace from "./AppWorkspace/AppWorkspace";
import Input from "./Input";
import Output from "./Output";

export const CodeEditor = () => {
  const globalState = useSelector((state) => state.globalSlice);
  const dispatch = useDispatch();
  const setCode = (code) => {
    dispatch(codeChange(code));
  };
  return (
    <div className="code-editor">
      <EditorNavbar />
      <AppWorkspace>
        <Editor
          heading="Editor"
          height={"100%"}
          defaultLanguage={globalState.currentLanguage.languageCode}
          value={globalState.editorCode}
          onChange={setCode}
          theme={globalState.isDarkMode ? "vs-dark" : "vs-light"}
          options={options}
          path={globalState.currentLanguage.languageCode}
        />
        <Input heading="Input" />
        <Output heading="Output" />
      </AppWorkspace>
    </div>
  );
};
