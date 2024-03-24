import { createSlice } from "@reduxjs/toolkit";
import { languages } from "../data/compiler";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    currentUser: "",
    editorConsole: "",
    editorInput: "",
    editorCode: "//Happy Coding!\n//Load the template for the basic code!",
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
    isConsoleOpen: true,
    isConsoleInput: true,
  },
  reducers: {
    setConsoleOpen: (state, action) => {
      state.isConsoleOpen = action.payload;
    },
    setConsoleInput: (state, action) => {
      state.isConsoleInput = action.payload;
    },
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
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
  setUser,
  setConsoleOpen,
  setConsoleInput,
} = globalSlice.actions;

export default globalSlice.reducer;

