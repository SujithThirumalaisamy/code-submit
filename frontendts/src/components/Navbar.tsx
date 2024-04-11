import { Link } from "react-router-dom";

type NavbarPropsType = {
  title:string
}
function Navbar({title}:NavbarPropsType) {
  return (
    <div className="navbar">
      <div className="wrapper">
        <img
          src="/CompileNow.png"
          alt=""
          className="nav-logo cursor-pointer"
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
