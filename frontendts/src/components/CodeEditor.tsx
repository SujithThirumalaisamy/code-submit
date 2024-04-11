import { Editor } from "@monaco-editor/react";
import { options } from "../data/editorOptions";
import { useSelector } from "react-redux";
import { codeChange } from "../features/globalSlice";
import EditorNavbar from "./EditorNavbar";
import Input from "./Input";
import Output from "./Output";
import { GlobalState, useAppDispatch } from "../app/store";
import SplitPane from "react-split-pane";
import ResizableComponentWrapper from "./LayoutComponentWrapper/LayoutComponentWrapper";

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

      <SplitPane
        split="horizontal"
        minSize={50}
        style={{
          marginTop: `5vh`,
          position: "fixed",
          gap: "0.2rem",
        }}
        defaultSize={parseInt(localStorage.getItem("splitPos1"), 10) || 540}
        onChange={(size) => localStorage.setItem("splitPos1", size)}
      >
        <ResizableComponentWrapper
          heading={"Editor"}
          children={
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
          }
        ></ResizableComponentWrapper>
        <SplitPane
          split="vertical"
          style={{ position: "fixed", gap: "0.2rem" }}
          minSize={25}
          defaultSize={parseInt(localStorage.getItem("splitPos2"), 10) || 900 }
          onChange={(size) => localStorage.setItem("splitPos2", size)}
        >
          <ResizableComponentWrapper
            heading="Input"
            children={<Input />}
          ></ResizableComponentWrapper>
          <ResizableComponentWrapper
            heading="Output"
            children={<Output />}
          ></ResizableComponentWrapper>
        </SplitPane>
      </SplitPane>
    </div>
  );
};
