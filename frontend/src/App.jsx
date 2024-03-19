import "./App.css";
import React, { useEffect, useState } from "react";
import { CodeEditor } from "./components/CodeEditor";
import Signup from "./components/Signup";
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./features/globalSlice";

function App() {
  const globalState = useSelector((state) => state.globalSlice);
  const dispatch = useDispatch();
  const cookies = new Cookies(null, { path: "/" });
  useEffect(() => {
    dispatch(setUser(cookies.get("CodeSubmitUser")));
  }, []);
  return (
    <>{globalState.currentUser === undefined ? <Signup /> : <CodeEditor />}</>
  );
}

export default App;
