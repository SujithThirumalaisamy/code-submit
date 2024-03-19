import "./App.css";
import React, { useEffect, useState } from "react";
import { CodeEditor } from "./components/CodeEditor";
import Signup from "./components/Signup";
import Cookies from 'universal-cookie'

function App() {
  const [loggedUser, setLoggedUser] = useState("");
  const cookies = new Cookies(null, { path: '/' });
  useEffect(() => {
    setLoggedUser(cookies.get('CodeSubmitUser'))
  }, [])
  return (
    <>
      {

        loggedUser == "" ?
          <Signup /> :
          <CodeEditor />
      }
    </>
  );
}

export default App;
