import { useDispatch, useSelector } from "react-redux";
import { inputChange } from "../features/globalSlice";
import SplitStringComponent from "../features/SplitStringComponent";

function Output() {
  const globalState = useSelector((state) => state.globalSlice);
  const dispatch = useDispatch();

  return (
    <div className="content">
      <div className="editor-output">
        {SplitStringComponent(globalState.editorConsole)}
      </div>
    </div>
  );
}
export default Output;
