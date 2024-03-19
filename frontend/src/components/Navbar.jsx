import LanguageSelector from "./LanguageSelector";
import RunButton from "./RunButton";
import LoadTemplate from "./LoadTemplate";

function Navbar({ isConsoleOpen, setIsConsoleOpen, isInput, setIsInput }) {
  return (
    <div className="navbar">
      <img
        src="/TUF.png"
        alt=""
        className="nav-logo cursor-pointer"
        style={{ padding: "20px 0px" }}
      />
      <div className="nav-lang-select">
        <LanguageSelector />
      </div>
      <div className="nav-load-template">
        <LoadTemplate />
      </div>
      <div className="nav-run">
        <RunButton
          isConsoleOpen={isConsoleOpen}
          setIsConsoleOpen={setIsConsoleOpen}
          isInput={isInput}
          setIsInput={setIsInput}
        />
      </div>
    </div>
  );
}

export default Navbar;
