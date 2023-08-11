
import Modal from "./Modal";
import profile from "../image/profile.png";
import Style from "../css/navbar.module.css";

const Navbar = () => {
  const info = [
    {
      title: "Login", 
      types: [
        {
          type:"text",
          name: "username"
        }, 
        {
          type:"password",
          name:"password"
        },
      ],
    },
    {
      title: "Sign Up", 
      types: [
        {
          type:"text",
          name: "username"
        }, 
        {
          type:"email",
          name:"email"
        },
        {
          type:"password",
          name:"password"
        },
        {
          type:"password",
          name:"confrim password"
        },
        
      ],
    }
  ]

  

  const navbarInfo=(ele)=>{
    return(
      <>
        <Modal info={ele}/>
      </>
    )
  }
  return (
    <>
      <nav>
        {
          info.map(navbarInfo)
        }
        <div className={Style.user}>
          <img src={profile} alt="profile" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
