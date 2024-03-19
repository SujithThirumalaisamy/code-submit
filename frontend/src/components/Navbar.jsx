import React from "react";
import LanguageSelector from "./LanguageSelector";
import RunButton from "./RunButton";
import LoadTemplate from "./LoadTemplate";

function Navbar() {
  return (
    <div className="navbar">
      <img src="/TUF.png" alt="" className="nav-logo" />
      <div className="nav-lang-select">
        <LanguageSelector />
      </div>
      <div className="nav-load-template">
        <LoadTemplate />
      </div>
      <div className="nav-run">
        <RunButton />
      </div>
    </div>
  );
}

export default Navbar;
