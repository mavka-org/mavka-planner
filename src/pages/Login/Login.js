import NavBar from '../../components/NavBar/NavBar'
import classes from './Login.module.css'
import LoginPng from './../../assets/img/login.png'
import Button from './../../components/Button/Button'
const Login = () => {
  return (
    <div>
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
