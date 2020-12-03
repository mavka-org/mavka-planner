import NavBar from '../../components/NavBar/NavBar'
import classes from './Landing.module.css'
import ZnoPoKolina from './../../assets/img/zno_po_kolina.png'
import Planner from './../../assets/img/planner.jpg'
import Button from './../../components/Button/Button'

const Landing = () => {
  return (
    <div className={classes.Layout}>
      <NavBar />
      <div className={classes.grid_container}>
        <img src={ZnoPoKolina} />
        <p className="defaultText">ЗНО не таке страшне, як здається. Ми допоможемо тобі!</p>
        <Button type="black">📅  розпланувати підготовку</Button>
        <Button type="white">📚  вчити тести та матеріали</Button>
        <img src={Planner} />
      </div>
    </div>
  )
}

export default Landing
