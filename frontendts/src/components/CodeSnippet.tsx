/* eslint-disable react/prop-types */
import { toast } from "react-toastify";
import SplitStringComponent from "../features/SplitStringComponent";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function CodeSnippet({ code }) {
  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    toast.info("Coppied to Clipboard");
  };
  const [isExpand, setIsExpand] = useState(false);
  return (
    <div className="snippet-wrapper">
      <div className="snippet-top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => copyToClipboard(code)}
          className="cursor-pointer"
          height={"20px"}
          fill="#fff"
          viewBox="0 0 384 512"
        >
          <path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
        </svg>
      </div>
      <pre
        className="snippet-body"
        onClick={() => setIsExpand((prev) => !prev)}
      >
        {isExpand && code.length >= 100
          ? SplitStringComponent(code)
          : SplitStringComponent(code.slice(0, 100))}
        {isExpand || code.length <= 100 ? (
          ""
        ) : (
          <div className="cursor-pointer">. . .</div>
        )}
      </pre>
    </div>
  );
}
