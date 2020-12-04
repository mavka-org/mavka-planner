import NavBar from '../../components/NavBar/NavBar'
import classes from './Register.module.css'
import RegisterPng from './../../assets/img/register.png'
import Button from './../../components/Button/Button'
const Register = () => {
  return (
    <div>
      <NavBar />
      <div className={classes.grid_container}>
       <img src={RegisterPng} />
       <p className="defaultText">реєструйся за допомогою: </p>
       <Button type="telegram">teleram</Button>
       <Button type="white">інше</Button>
       <p className="lightUnderlinedText">вже маєш акаунт?</p>


      </div>
    </div>
  )
}
export default Register