import { Editor } from "@monaco-editor/react";
import { options } from "../data/editorOptions";
import { useSelector } from "react-redux";
import { codeChange } from "../features/globalSlice";
import EditorNavbar from "./EditorNavbar";
import AppWorkspace from "./AppWorkspace/AppWorkspace";
import Input from "./Input";
import Output from "./Output";
import { GlobalState, useAppDispatch } from "../app/store";

export const CodeEditor = () => {
  const globalState: GlobalState = useSelector<GlobalState>(
    (state) => state.globalSlice
  );
  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setCode = (code: any) => {
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
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          options={options}
          path={globalState.currentLanguage.languageCode}
        />
        <Input heading="Input" />
        <Output heading="Output" />
      </AppWorkspace>
    </div>
  );
};
