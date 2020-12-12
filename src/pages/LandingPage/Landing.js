import LandingHeader from './../../assets/img/LandingHeader.png';
import { LargeButton } from '../../components/Button/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Box } from '@material-ui/core';
// import Demo from '../../assets/img/demo.gif'
import Demo from '../../assets/img/demo.gif'
import Footer from '../../components/Footer/Footer';
import {addAnalyticsEvent} from '../../services/API/httpRequests.js'
import {useContext} from "react";
import {UserContext} from "../../providers/UserProvider";


const useStyles = makeStyles((theme) => ({
  Img: {
    width: "250px",
  },
  oppositeColor: {
    backgroundColor: '#fff'
  },
  boxBorders: {
    boarderWidth: "10px",
  }
}));

const Landing = (props) => {

    const user = useContext(UserContext);

    const addEvent = (e) => {
        console.log("event ", e)
    }



  const classes = useStyles();
  return (
      <Grid container spacing={2} direction="column" alignItems="center">

        <Grid item>
          <img src={LandingHeader} className={classes.Img} alt="mavka"/>
        </Grid>

        <Grid item>
          <Typography variant="h6" align="center">ЗНО не таке страшне, як здається. Ми допоможемо тобі!</Typography>
        </Grid>

        <Grid item container spacing={1}>

          <Grid container item>
            <LargeButton
              // href='planner'
              fullWidth
              variant="contained"
              color="primary"
              name="LandingPlannerButton"
              eventName="LandingPlannerButtonClicked"
              onClick={addEvent}
            >
            📅  розпланувати підготовку
            </LargeButton>
          </Grid>

          <Grid container item>
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



           <Box styles={{ "borderWidth": "10px"}} display="flex" justifyContent="center" p={4}>
             <Box className={classes.boxBorders}>
               <img width="100%" src={Demo} alt="mavka"/>
             </Box>
           </Box>


          <Footer />
      </Grid>
  )
}

export default Landing
