import { useState } from "react";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { setUser } from "../features/globalSlice";
import { toast } from "react-toastify";

function Signup() {
  const [signupForm, setSignupForm] = useState({
    username: "",
  });
  const dispatch = useDispatch();

  const [isChecked, setIsCheck] = useState(false);
  const cookies = new Cookies(null, { path: "/" });
  const signup = () => {
    if (!isChecked) {
      toast.error("Please Accept the Terms and Conditions!");
    } else {
      cookies.set("CodeSubmitUser", signupForm.username);
      dispatch(setUser(signupForm.username));
      toast.success("Logged in successfully!");
    }
  };
  return (
    <div className="signup-form">
      <form className="w-full max-w-sm  ring-1 ring-inset ring-gray-300 py-10 px-5 rounded">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Username
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value={signupForm.username}
              onChange={(e) =>
                setSignupForm((prev) => {
                  return { ...prev, username: e.target.value };
                })
              }
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3"></div>
          <label className="md:w-2/3 block text-gray-500 font-bold">
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              value={isChecked ? "true" : "false"}
              onChange={() => setIsCheck((prev) => !prev)}
            />
            <span className="text-sm">
              Accept the terms and conditions of this platform
            </span>
          </label>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={signup}
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
