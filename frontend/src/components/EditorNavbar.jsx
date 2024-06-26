import LanguageSelector from "./LanguageSelector";
import RunButton from "./RunButton";
import LoadTemplate from "./LoadTemplate";
import { Link } from "react-router-dom";

function EditorNavbar() {
  return (
    <div className="navbar">
      <img
        src="/CompileNow.png"
        alt=""
        className="nav-logo cursor-pointer"
      />
      <div className="nav-lang-select">
        <LanguageSelector />
      </div>
      <div className="nav-load-template">
        <LoadTemplate />
      </div>
      <div className="nav-run">
        <RunButton />
      </div>
      <button className="text-white font-medium rounded button">
        <Link to={"/submissions"}>Sumissions</Link>
      </button>
    </div>
  );
}

export default EditorNavbar;
