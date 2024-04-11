import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { languageChange } from "../features/globalSlice";
import { languages } from "../data/compiler";

function LanguageSelector() {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.globalSlice);
  const [languageDropdownIsOpen, setLanguageDropdownIsOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <div onClick={() => setLanguageDropdownIsOpen((prev) => !prev)}>
        <button
          type="button"
          className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-black-200 px-3 py-2 text-sm font-semibold text-white-900 shadow-sm ring-1 ring-inset ring-gray-600 language-drop-header"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {globalState.currentLanguage.languageName}
          <svg
            className="-mr-1 h-5 w-5 text-white-900"
            viewBox="0 0 20 20"
            fillRule="currentColor"
            fill="white"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
          languageDropdownIsOpen ? "" : "hidden"
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        <div className="py-1 language-drop-option" role="none">
          {languages.map((language) => {
            return (
              <button
                className="text-white-700 block px-4 py-2 text-sm"
                onClick={() => {
                  dispatch(languageChange(language));
                  setLanguageDropdownIsOpen((prev) => !prev);
                }}
                key={language.languageName}
              >
                {language.languageName}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LanguageSelector;
