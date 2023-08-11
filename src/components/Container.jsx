import Style from "../css/container.module.css"
import profile from "../image/profile.png"
const Container = () => {
  return (
    <>
        <div className={Style.container}>
          <div className={Style.profile}>
            <img src={profile} alt="" />
          </div>
          <h1 className={Style.heading}>Welcome back , Lorem ipsum.</h1>
        </div>
    </>
  )
}

export default Container