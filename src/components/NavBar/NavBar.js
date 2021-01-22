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

import Link from "@material-ui/core/Link";
import { useHistory } from "react-router-dom";
import  { Redirect } from 'react-router-dom'
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
  const [openedLogin, setOpenedLogin] = React.useState(false)


  const handleCloseLogin = () => {
    setOpenedLogin(false)
  }



  const handleLoggedOut = () => {
      signOut()

  }

  const handleLogIn = () => {
      window.gtag('event', 'login_button_click', {
          'category' : 'authentication_action',
      })

      setOpenedLogin(true)
  }


  return (
    <Box display="flex" alignItems="center" py={1}>

      <Box flexGrow={1}>
       <NavLink
              to="/"
              onClick={() => window.gtag('event', 'menu_logo_button_click', {
                  'category' : 'menu_action',
                  'subject_id' : subject.id,
              }) }
          >
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
                  onClick={() => window.gtag('event', 'menu_planner_button_click', {
                      'category' : 'menu_action',
                      'subject_id' : subject.id,
                  }) }
                  >
                  планер
              </Button>
              <Button
                  name="NavProgramButton"
                  active={props.selected === "program"}
                  href='/program'
                  onClick={() => window.gtag('event', 'menu_program_button_click', {
                      'category' : 'menu_action',
                      'subject_id' : subject.id,
                  }) }
                  >програма
              </Button>
              <Button
                  name="NavTestButton"
                  active={props.selected === "tests"}
                  href='https://tests.mavka.org'
                  onClick={() => window.gtag('event', 'menu_tests_button_click', {
                      'category' : 'menu_action',
                      'subject_id' : subject.id,
                  }) }
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
