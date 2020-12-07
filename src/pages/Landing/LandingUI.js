import Page from '../../components/Page/Page';
import classes from './Landing.module.css';
import LandingHeader from './../../assets/img/LandingHeader.png';
import Planner from './../../assets/img/planner.jpg';
import { LargeButton } from '../../components/Button/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import MuiButton from '@material-ui/core/Button';
import Demo from '../../assets/img/giphy.gif'
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  Grid: {
    width: "100%",
    justifyContent: "center",
  },
  Img: {
    width: "250px",
  },
  oppositeColor: {
    backgroundColor: '#fff'
  }
}));

const LandingUI = (props) => {
  const classes = useStyles();
  return (
    <Page loginFunc={props.loginFunc}>
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
              href='planner'
              fullWidth
              variant="contained"
              color="primary"
            >
            📅  розпланувати підготовку
            </LargeButton>
          </Grid>

          <Grid item style={{width: "100%"}}>
            <LargeButton
              href='program'
              fullWidth
              variant="contained"
              className={classes.oppositeColor}
            >
            📚  вчити тести та матеріали
            </LargeButton>
          </Grid>

        </Grid>

        <Box item pt={2}>
          <img src={Demo} />
        </Box>

      </Grid>
    </Page>
  )
}

export default LandingUI
