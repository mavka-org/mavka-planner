import NavBar from '../../components/NavBar/NavBar';
import classes from './Landing.module.css';
import ZnoPoKolina from './../../assets/img/zno_po_kolina.png';
import Planner from './../../assets/img/planner.jpg';
import { RoundButton } from './../../components/Button/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import MuiButton from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  Grid: {
    width: "100%",
    justifyContent: "center"
  },
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Grid container spacing="2" className={classes.Grid}>

        <Grid item>
          <img src={ZnoPoKolina} />
        </Grid>

        <Grid item>
          <Typography>ЗНО не таке страшне, як здається. Ми допоможемо тобі!</Typography>
        </Grid>

        <Grid item container spacing="2">

          <Grid style={{width: '100%'}} item>
            <RoundButton
              size="large"
              fullWidth
              variant="contained"
              color="primary"
            >
            📅  розпланувати підготовку
            </RoundButton>
          </Grid>

          <Grid style={{width: '100%'}} item>
            <RoundButton
              size="large"
              fullWidth
              variant="contained"
              color="secondary"
            >
            📚  вчити тести та матеріали
            </RoundButton>
          </Grid>

        </Grid>

        <Grid item>
          <img src={Planner} />
        </Grid>

      </Grid>
    </div>
  )
}

export default Landing
