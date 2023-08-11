import { useEffect } from "react"
import Style from "../css/modal.module.css"
import Navbutton from "../css/navbar.module.css"
import { FcGoogle } from 'react-icons/fc';
const ShowModal = ({ closeModal , info}) => {
  useEffect(() => {
    document.body.style.overflowY="hidden";
    return () => {
      document.body.style.overflowY="scroll";
    };
  }, []);

  const inputReturn = (ele)=>{
    return(
      <>
        <input type={ele.type} placeholder={ele.name} name={ele.name}/>
      </>
    )
  }
  
  return (
    <>
      <div className={Style.moduleWrapper} onClick={closeModal}></div>
      <div className={Style.modalContent}>
        <h1 className={Style.heading}>{info.title}</h1>
        <div className={Style.inputSection}>
          {
            info.types.map(inputReturn)
          }
        <button className={Style.google}>{<FcGoogle/>}</button>
        </div>
        <button onClick={closeModal} className={Navbutton.button} type="submit">{info.title}</button>
      </div>
      
    </>
  )
}

export default ShowModal