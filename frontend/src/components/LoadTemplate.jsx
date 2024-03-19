import { useDispatch, useSelector } from "react-redux";
import { codeChange } from "../features/globalSlice";

function LoadTemplate() {
  const globalState = useSelector((state) => state.globalSlice);
  const dispatch = useDispatch();
  const loadTemplate = () => {
    dispatch(codeChange(globalState.currentLanguage.template));
  };
  return (
    <button
      className="text-white font-medium rounded run-button"
      onClick={loadTemplate}
    >
      Load Template
    </button>
  );
}

export default LoadTemplate;
