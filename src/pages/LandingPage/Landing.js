import LandingHeader from './../../assets/img/LandingHeader.png';
import { LargeButton } from '../../components/Button/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Box } from '@material-ui/core';
// import Demo from '../../assets/img/demo.gif'
import Demo from '../../assets/img/demo.gif'
import Footer from '../../components/Footer/Footer';
import { addAnalyticsEvent } from '../../services/API/httpRequests.js'
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import Paper from '@material-ui/core/Paper';
import React, { useEffect } from 'react'
import Redirect from "react-router-dom/es/Redirect";
import { useHistory } from "react-router-dom";
import {TrackingContext} from '@vrbo/react-event-tracking'
import firebase from "firebase";


const useStyles = makeStyles((theme) => ({
  oppositeColor: {
    backgroundColor: '#fff'
  },
  boxBorders: {
    boarderWidth: "10px",
    boxShadow: '0px 7px 12px -5px rgba(0,0,0,0.75)',
    filter: 'drop-shadow(4px 4px 12px rgba(0, 0, 0, 0.15))',
  }
}));



const Landing = (props) => {
  const user = useContext(UserContext);
  const classes = useStyles();
  const history = useHistory();
  const tracking = useContext(TrackingContext)

  useEffect(
    () => {
      if (user) {
        tracking.trigger("LandingPageViewed")
        firebase.analytics().logEvent('LandingPageViewed')
        console.log("LandingPageViewed")
      }
    },
    [user]
  )


  return (
    <Box width="100%">
      <Grid container spacing={2} direction="column" alignItems="center">

        <Grid item>
          <img src={LandingHeader} style={{ width: '250px' }} alt="mavka" />
        </Grid>

        <Grid item>
          <Typography variant="h6" align="center">ЗНО не таке страшне, як здається. Ми допоможемо тобі!</Typography>
        </Grid>

        <Grid item container spacing={3} style={{ width: '300px'}}>

          <Grid container item>
            <LargeButton
              //href='planner'
              fullWidth
              color="primary"
              style={{background: '#000', fontSize: '17px'}}
              variant="contained"
              name="LandingPlannerButton"
              onClick={(e)=>tracking.trigger("LandingPlannerButtonClicked", {}, {"int_redirect": {"href":'planner', "history":history}})}
            >
            📅  планер підготовки
            </LargeButton>
          </Grid>

          <Grid container item>
            <LargeButton
              //href='program'
              fullWidth
              style={{fontSize: '17px' }}
              variant="contained"
              className={classes.oppositeColor}
              name="LandingProgramButton"
              onClick={(e)=>tracking.trigger("LandingProgramButtonСlicked", {}, {"int_redirect": {"href":'program', "history":history}})}
            >
            📚  тести та матеріали
            </LargeButton>
          </Grid>

        </Grid>



        <Box style={{ width: '80%', maxWidth: '300px' }} display="flex" justifyContent="center" p={4}>
          <img style={{alignItems: "flex-start"}} width="100%" src={Demo} alt="mavka" />
        </Box>


        <Footer />
      </Grid>
    </Box>
  )
}

export default Landing
