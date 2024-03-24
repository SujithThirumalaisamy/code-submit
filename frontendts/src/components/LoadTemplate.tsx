import { useDispatch, useSelector } from "react-redux";
import { codeChange } from "../features/globalSlice";
import { GlobalState } from "../app/store";

function LoadTemplate() {
  const globalState:GlobalState = useSelector<GlobalState>((state) => state.globalSlice);
  const dispatch = useDispatch();
  const loadTemplate = () => {
    dispatch(codeChange(globalState.currentLanguage.template));
  };
  return (
    <button
      className="text-white font-medium rounded button"
      onClick={loadTemplate}
    >
      Load Template
    </button>
  );
}

export default LoadTemplate;
