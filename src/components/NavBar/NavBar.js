import classes from './NavBar.module.css'
import MavkaSmallLogo from './../../assets/img/mavka-small-logo.png'
import MavkaTextLogo from './../../assets/img/mavka-text-logo.png'
const NavBar = () => {
  return (
    <div className={classes.NavBar}>
      <div className={classes.img_wrapper}>
        <img className={classes.MavkaSmallLogo} src={MavkaSmallLogo} />
        <img className={classes.MavkaTextLogo} src={MavkaTextLogo} />
      </div>
      <button className={classes.NavBarButton}>увійти</button>
    </div>
  )
}

export default NavBar
