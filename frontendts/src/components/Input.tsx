import { useDispatch, useSelector } from "react-redux";
import { inputChange } from "../features/globalSlice";
import { GlobalState } from "../app/store";

function Input({ heading }: { heading: string }) {
  const globalState: GlobalState = useSelector<GlobalState>(
    (state) => state.globalSlice
  );
  const dispatch = useDispatch();
  console.log(heading);
  return (
    <div className="content">
      <textarea
        className="editor-input"
        value={globalState.editorInput}
        onChange={(e) => dispatch(inputChange(e.target.value))}
      />
    </div>
  );
}
export default Input;
