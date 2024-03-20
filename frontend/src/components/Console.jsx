import { useDispatch, useSelector } from "react-redux";
import {
  inputChange,
  setConsoleInput,
  setConsoleOpen,
} from "../features/globalSlice";
import SplitStringComponent from "../features/SplitStringComponent";

function Console() {
  const globalState = useSelector((state) => state.globalSlice);
  const dispatch = useDispatch();
  const { isConsoleOpen, isConsoleInput } = globalState;

  return (
    <div className="console">
      <div className="console-top-bar">
        <div className="leftbar">
          <div
            className={`console-tab tab-1 ${
              isConsoleInput ? "tab-active" : ""
            }`}
            onClick={() => {
              dispatch(setConsoleInput((state) => !state));
              dispatch(setConsoleOpen(true));
            }}
          >
            Input
          </div>
          <div
            className={`console-tab tab-2 ${
              isConsoleInput ? "" : "tab-active"
            }`}
            onClick={() => {
              dispatch(setConsoleInput((state) => !state));
              dispatch(setConsoleOpen(true));
            }}
          >
            Output
          </div>
        </div>
        {isConsoleOpen ? (
          <svg
            className="-mr-1 h-5 w-5 text-white-900 close-button"
            viewBox="0 0 20 20"
            fillRule="currentColor"
            fill="white"
            aria-hidden="true"
            onClick={() => dispatch(setConsoleOpen((state) => !state))}
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="-mr-1 h-5 w-5 text-white-900 close-button"
            viewBox="0 0 20 20"
            fillRule="currentColor"
            fill="white"
            aria-hidden="true"
            style={{ transform: "rotate(180deg)" }}
            onClick={() => dispatch(setConsoleOpen((state) => !state))}
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      <div className={`${isConsoleOpen ? "" : "hidden"} content`}>
        {isConsoleInput ? (
          <textarea
            className="editor-input"
            type="text"
            value={globalState.editorInput}
            onChange={(e) => dispatch(inputChange(e.target.value))}
          />
        ) : (
          <div className="editor-output">
            {SplitStringComponent(globalState.editorConsole)}
          </div>
        )}
      </div>
    </div>
  );
}
export default Console;
