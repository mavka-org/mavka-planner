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

  useEffect(
    () => {
      if (user) {
        addAnalyticsEvent(user, "LandingPageOpened", {})
        console.log("sakses", user)
      }
    },
    [user]
  )


  const addEvent = (name, par) => {
    addAnalyticsEvent(user, name, par)
    console.log("event ", name)
  }



  const classes = useStyles();
  return (
    <Box>
      <Grid container spacing={2} direction="column" alignItems="center">

        <Grid item>
          <img src={LandingHeader} style={{ width: '250px' }} alt="mavka" />
        </Grid>

        <Grid item>
          <Typography variant="h6" align="center">ЗНО не таке страшне, як здається. Ми допоможемо тобі!</Typography>
        </Grid>

        <Grid item container spacing={1}>

          <Grid container item>
            <LargeButton
              href='planner'
              fullWidth
              variant="contained"
              color="primary"
              name="LandingPlannerButton"
              eventName="LandingPlannerButtonClicked"
              onClick={(e) => addEvent("LandingPlannerButtonClicked", {})}
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
              onClick={(e) => addEvent("LandingProgramButtonClicked", {})}
            >
              📚  вчити тести та матеріали
      </LargeButton>
          </Grid>

        </Grid>



        <Box styles={{ "borderWidth": '10px' }} display="flex" justifyContent="center" p={4}>
          <Box className={classes.boxBorders}>
            <img width="100%" src={Demo} alt="mavka" />
          </Box>
        </Box>


        <Footer />
      </Grid>
    </Box>
  )
}

export default Landing
