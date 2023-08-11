import { useState } from "react"
import ShowModal from "./SignupModal";
import Style from "./Signup.module.css"
const Signup = () => {
    const [showModal, setshowModal] = useState(false);
    const closeModal =()=>setshowModal(false);
    
    
    
  return (
    <>
        <button className={Style.button} onClick={()=>setshowModal(true)}>Sign Up</button>
        {showModal && <ShowModal closeModal={closeModal}/>}
    </>
  )
}

export default Signup