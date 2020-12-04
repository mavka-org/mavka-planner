import Page from './../../components/Page/Page';
import classes from './Landing.module.css';
import LandingHeader from './../../assets/img/LandingHeader.png';
import Planner from './../../assets/img/planner.jpg';
import { LargeButton } from './../../components/Button/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import MuiButton from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  Grid: {
    width: "100%",
    justifyContent: "center",
  },
  Img: {
    width: "250px",
  },
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <Page>
      <Grid container spacing="2" className={classes.Grid}>

        <Grid item>
          <img src={LandingHeader} className={classes.Img}/>
        </Grid>

        <Grid item>
          <Typography variant="h6" align="center">ЗНО не таке страшне, як здається. Ми допоможемо тобі!</Typography>
        </Grid>

        <Grid item container spacing="2">

          <Grid item style={{width: "100%"}}>
            <LargeButton
              fullWidth
              variant="contained"
              color="primary"
            >
            📅  розпланувати підготовку
            </LargeButton>
          </Grid>

          <Grid item style={{width: "100%"}}>
            <LargeButton
              fullWidth
              variant="contained"
              color="secondary"
            >
            📚  вчити тести та матеріали
            </LargeButton>
          </Grid>

        </Grid>

        <Grid item>
          <img src={Planner} />
        </Grid>

      </Grid>
    </Page>
  )
}

export default Landing
