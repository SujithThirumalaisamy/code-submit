import { useSelector } from "react-redux";
import SplitStringComponent from "../features/SplitStringComponent";
import { GlobalState } from "../app/store";

function Output({ heading }: { heading: string }) {
  const globalState: GlobalState = useSelector<GlobalState>(
    (state) => state.globalSlice
  );
  console.log(heading);
  return (
    <div className="content">
      <div className="editor-output">
        {SplitStringComponent(globalState.editorConsole)}
      </div>
    </div>
  );
}
export default Output;
