import { createSlice, configureStore } from "@reduxjs/toolkit";
import { languages } from "../data/compiler";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    editorConsole: "",
    editorInput: "",
    editorCode: "//Happy Coding!",
    isProcessing: false,
    isDarkMode: true,
    languages: [...languages],
    currentLanguage: {
      id: 63,
      languageCode: "javascript",
      languageName: "JavaScript (Node.js 12.14.0)",
      template:
        '// Print Hello, World! to the console\nconsole.log("Hello, World!");',
    },
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    codeChange: (state, action) => {
      state.editorCode = action.payload;
    },
    inputChange: (state, action) => {
      state.editorInput = action.payload;
    },
    consoleChange: (state, action) => {
      state.editorConsole = action.payload;
    },
    toggleProcessing: (state) => {
      state.isProcessing = !state.isProcessing;
    },
    languageChange: (state, action) => {
      state.currentLanguage = action.payload;
    },
  },
});

export const {
  toggleDarkMode,
  codeChange,
  consoleChange,
  toggleProcessing,
  languageChange,
  inputChange,
} = globalSlice.actions;

export default globalSlice.reducer;
