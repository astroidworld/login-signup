import { useState } from "react"
import ShowModal from "./LoginModal";
import Style from "./login.module.css"
const Login = () => {
    const [showModal, setshowModal] = useState(false);
    const closeModal =()=>setshowModal(false);
    
    
    
  return (
    <>
        <button className={Style.button} onClick={()=>setshowModal(true)}>Log In</button>
        {showModal && <ShowModal closeModal={closeModal}/>}
    </>
  )
}

export default Login