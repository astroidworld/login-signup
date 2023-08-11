import { useEffect } from "react";
import Style from "./login.module.css";
import { FcGoogle } from "react-icons/fc";
const ShowModal = ({ closeModal }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <>
      <div className={Style.moduleWrapper} onClick={closeModal}></div>
      <div className={Style.modalContent}>
        
        <h1 className={Style.heading}>Log In</h1>

        {/* form section */}

        <form className={Style.inputSection}>
          <input type="text"  name="name" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <button className={Style.button} type="submit">Log In</button>
          <h2 className={Style.subHeading}>Or With</h2>
          <button className={Style.google} type="submit"><FcGoogle/></button>
        </form>

        {/* from section */}


      </div>
    </>
  );
};

export default ShowModal;
