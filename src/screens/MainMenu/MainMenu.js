import NavBar from '../../UI/NavBar/NavBar'
import classes from './MainMenu.module.css'
import ZnoPoKolina from './../../img/zno_po_kolina.png'
import Planner from './../../img/planner.jpg'
import Button from './../../UI/Button/Button'
const MainMenu = () => {
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
export default MainMenu