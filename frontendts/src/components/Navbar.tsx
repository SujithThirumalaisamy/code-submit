import { Link } from "react-router-dom";

function Navbar({title}) {
  return (
    <div className="navbar">
      <div className="wrapper">
        <img
          src="/TUF.png"
          alt=""
          className="nav-logo cursor-pointer"
          style={{ padding: "20px 0px" }}
        />
        <span>{title}</span>
      </div>
      <button className="text-white font-medium rounded run-button">
        <Link to={"/"}>Code Editor</Link>
      </button>
    </div>
  );
}

export default Navbar;
