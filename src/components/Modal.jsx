import { useState } from "react"
import ShowModal from "./ShowModal";
import Style from "../css/navbar.module.css"
const Modal = ({info}) => {
    const [showModal, setshowModal] = useState(false);
    const closeModal =()=>setshowModal(false);
    
    
    
  return (
    <>
        <button className={Style.button} onClick={()=>setshowModal(true)}>{info.title}</button>
        {showModal && <ShowModal closeModal={closeModal} info={info}/>}
    </>
  )
}

export default Modal