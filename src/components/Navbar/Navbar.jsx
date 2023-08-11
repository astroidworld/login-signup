
import profile from "../../image/profile.png";
import Style from "./navbar.module.css";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

const Navbar = () => {
  return (
    <>
      <nav>
        <Login/>
        <Signup/>
        <div className={Style.user}>
          <img src={profile} alt="profile" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
