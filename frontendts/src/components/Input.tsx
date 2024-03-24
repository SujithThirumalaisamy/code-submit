import { useDispatch, useSelector } from "react-redux";
import { inputChange } from "../features/globalSlice";
function Input() {
  const globalState = useSelector((state) => state.globalSlice);
  const dispatch = useDispatch();

  return (
    <div className="content">
      <textarea
        className="editor-input"
        type="text"
        value={globalState.editorInput}
        onChange={(e) => dispatch(inputChange(e.target.value))}
      />
    </div>
  );
}
export default Input;
