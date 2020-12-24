import React, { useContext } from 'react';
import { UserContext } from './../../providers/UserProvider'
import { NavLink } from 'react-router-dom';
import Button from './../../components/Button/Button';
import { Grid, Box, Typography } from '@material-ui/core';
import MavkaSmallLogo from './../../assets/img/mavka-small-logo.png';
import MavkaTextLogo from './../../assets/img/mavka-text-logo.png';
import { makeStyles } from '@material-ui/core/styles';
import LoginDialog from './../../components/LoginDialog/LoginDialog';
import { getCurrentUser, handleTelegramResponse, signOut } from './../../services/Firebase/Authenticate'
import { addAnalyticsEvent } from '../../services/API/httpRequests.js'
import Link from "@material-ui/core/Link";
import { useHistory } from "react-router-dom";
import  { Redirect } from 'react-router-dom'
import {TrackingContext} from '@vrbo/react-event-tracking'
import {SubjectContext} from "../../providers/SubjectProvider";

const useStyles = makeStyles((theme) => ({
  Logo: {
    height: "24px",
  },
}));


const NavBar = (props) => {

  const classes = useStyles();

  const user = useContext(UserContext)
  const subject = useContext(SubjectContext)[0]
  const history = useHistory();
  const tracking = useContext(TrackingContext)
  const [openedLogin, setOpenedLogin] = React.useState(false)


  const handleCloseLogin = () => {
    setOpenedLogin(false)
  }



  const handleLoggedOut = () => {
      // tracking.trigger("LoggedOut", {}, {"int_redirect": { "href": "/", "history": history }})
      signOut()

  }

  const handleLogIn = () => {
      //tracking.trigger("LogInClicked")
      window.gtag('event', 'authenticate_action', {
          'action' : 'login_button_click',
      })

      setOpenedLogin(true)
  }


  return (
    <Box display="flex" alignItems="center" py={1}>

      <Box flexGrow={1}>
       {/*<NavLink to="/" onClick={(e) => addEvent("LogoFromMenuClicked", {})}>*/}
       {/* <NavLink to="/" onClick={() => tracking.trigger("LogoFromMenuClicked")}>*/}
          <NavLink
              to="/"
              onClick={() => window.gtag('event', 'menu_action', {
                  'action' : 'logo_button_click',
                  'subject_id' : subject.id,
              }) }
          >
       {/*   <NavLink to="/">*/}
          <img
              name="NavLandingButton"
              src={props.selected === undefined ? (MavkaTextLogo) : (MavkaSmallLogo)}
              alt="mavka"
              className={classes.Logo} />
        </NavLink>
      </Box>

      <Box display="flex" flexWrap="nowrap">
        <Grid item container justifySelf="flex-end" direction="row" alignItems="center" style={{ flexWrap: "nowrap" }}>
          {
            props.selected !== undefined &&
            <div>
              <Button
                  name="NavPlannerButton"
                  active={props.selected === "planner"}
                  href='/planner'
                  onClick={() => window.gtag('event', 'menu_action', {
                      'action' : 'planner_button_click',
                      'subject_id' : subject.id,
                  }) }
                  //onClick={(e) => tracking.trigger("PlannerFromMenuClicked", {}, {"int_redirect": {"href": '/planner', "history": history }} )}
              >
                  планер
              </Button>
              <Button
                  name="NavProgramButton"
                  active={props.selected === "program"}
                  href='/program'
                  onClick={() => window.gtag('event', 'menu_action', {
                      'action' : 'program_button_click',
                      'subject_id' : subject.id,
                  }) }
                  //onClick={(e) => tracking.trigger("ProgramFromMenuClicked", {}, {"int_redirect": {"href": '/program', "history": history }})}
              >програма
              </Button>
              <Button
                  name="NavTestButton"
                  active={props.selected === "tests"}
                  href='https://tests.mavka.org'
                  onClick={() => window.gtag('event', 'menu_action', {
                      'action' : 'tests_button_click',
                      'subject_id' : subject.id,
                  }) }
                  //onClick={(e) => tracking.trigger("TestFromMenuClicked", {},)}
                  //onClick={(e) => tracking.trigger("TestFromMenuClicked", {}, {"ext_redirect": {"href": 'https://tests.mavka.org', "history": history }})}
              >тести
              </Button>
            </div>
          }
          {
            user === undefined ?
              <Button onClick={handleLoggedOut} href="/" style={{ opacity: 0 }}>вийти</Button>
              :
              (!user || user.isAnonymous) ?
                <Button
                    name="NavLoginButton"
                    onClick={() => handleLogIn()}
                    //onClick={() => setOpenedLogin(true)}
                    variant="outlined"
                >увійти
                </Button>
                :
                <Button name="NavLogoutButton" onClick={handleLoggedOut}>вийти</Button>
              // href='/'
          }
        </Grid>
      </Box>

      <LoginDialog open={openedLogin} onClose={handleCloseLogin} handleTelegramResponse={handleTelegramResponse} goToLanding={props.goToLanding}/>

    </Box>
  )
}

export default NavBar
