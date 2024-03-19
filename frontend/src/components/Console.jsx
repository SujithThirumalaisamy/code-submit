import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import globalSlice, { inputChange } from "../features/globalSlice";

function Console() {
  const globalState = useSelector((state) => state.globalSlice);
  const dispatch = useDispatch();
  const [isInput, setIsInput] = useState(true);
  return (
    <div className="console">
      <div className="console-top-bar">
        <div
          className="console-tab tab-1 tab-active"
          onClick={() => setIsInput((prev) => !prev)}
        >
          Input
        </div>
        <div
          className="console-tab tab-2"
          onClick={() => setIsInput((prev) => !prev)}
        >
          Output
        </div>
      </div>
      <div className="content">
        {isInput ? (
          <textarea
            className="editor-input"
            type="text"
            value={globalState.editorInput}
            onChange={(e) => dispatch(inputChange(e.target.value))}
          />
        ) : (
          <div className="editor-output">{globalState.editorConsole}</div>
        )}
      </div>
    </div>
  );
}

export default Console;
