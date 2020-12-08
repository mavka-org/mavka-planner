import LandingHeader from './../../assets/img/LandingHeader.png';
import { LargeButton } from '../../components/Button/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Demo from '../../assets/img/giphy.gif'
import Box from '@material-ui/core/Box';
import InfoSection from '../../components/InfoSection/InfoSection';


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

const Landing = (props) => {
  const classes = useStyles();
  return (
      <Grid container spacing="2" className={classes.Grid}>

        <Grid item>
          <img src={LandingHeader} className={classes.Img} alt="mavka"/>
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
          <img src={Demo} alt="гарна гіфка" />
        </Box>
        <InfoSection />
      </Grid>
  )
}

export default Landing
