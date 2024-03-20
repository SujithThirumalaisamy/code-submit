import "./App.css";
import { useEffect } from "react";
import { CodeEditor } from "./components/CodeEditor";
import Signup from "./components/Signup";
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./features/globalSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Submissions from "./pages/Submissions";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const globalState = useSelector((state) => state.globalSlice);
  const dispatch = useDispatch();
  const cookies = new Cookies(null, { path: "/" });
  useEffect(() => {
    dispatch(setUser(cookies.get("CodeSubmitUser")));
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element:
        globalState.currentUser === undefined ? <Signup /> : <CodeEditor />,
    },
    {
      path: "submissions",
      element: <Submissions />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </>
  );
}

export default App;
