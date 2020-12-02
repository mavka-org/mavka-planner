import NavBar from '../../UI/NavBar/NavBar'
import classes from './Register.module.css'
import RegisterPng from './../../img/register.png'
import Button from './../../UI/Button/Button'
const Register = () => {
  return (
    <div className={classes.Layout}>
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