import NavBar from '../../UI/NavBar/NavBar'
import classes from './Login.module.css'
import LoginPng from './../../img/login.png'
import Button from './../../UI/Button/Button'
const Login = () => {
  return (
    <div className={classes.Layout}>
      <NavBar />
      <div className={classes.grid_container}>
       <img src={LoginPng} />
       <p className="defaultText">заходь за допомогою </p>
       <Button type="telegram">teleram</Button>
       <Button type="white">інше</Button>
       <p className="lightUnderlinedText">зареєструватися</p>


      </div>
    </div>
  )
}
export default Login