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

const useStyles = makeStyles((theme) => ({
  Logo: {
    height: "24px",
  },
}));


const NavBar = (props) => {

  const classes = useStyles();

  const user = useContext(UserContext)
  const history = useHistory();
  const [openedLogin, setOpenedLogin] = React.useState(false)


  const handleCloseLogin = () => {
    setOpenedLogin(false)
  }

  const handleLoggedOut = () => {
    addAnalyticsEvent(user,"LogOutClicked", {}).then(
        () => {
          history.push("/math/topic/11")
          signOut()
        }
    )
  }

  const recordAnalyticsAndRedirect = (event_name, event_params, href) => {
      addAnalyticsEvent(user,event_name, event_params).then(
          () => {
              history.push(href)
          }
      )
  }

  return (
    <Box display="flex" alignItems="center" py={1}>

      <Box flexGrow={1}>
        <NavLink to="/" onClick={(e) => addAnalyticsEvent(user,"LogoFromMenuClicked", {})}>
          <img src={props.selected === undefined ? (MavkaTextLogo) : (MavkaSmallLogo)} alt="mavka" className={classes.Logo} />
        </NavLink>
      </Box>

      <Box display="flex" flexWrap="nowrap">
        <Grid item container justifySelf="flex-end" direction="row" alignItems="center" style={{ flexWrap: "nowrap" }}>
          {
            props.selected !== undefined &&
            <div>
              <Button
                  //href='/planner'
                  name="NavPlannerButton"
                  active={props.selected === "planner"}
                  //onClick={(e) => addAnalyticsEvent(user,"PlannerFromMenuClicked", {})}
                  onClick={(e) => recordAnalyticsAndRedirect("PlannerFromMenuClicked", {}, '/planner')}
              >
                  планер
              </Button>
              <Button name="NavProgramButton" href='/program' active={props.selected === "program"} onClick={(e) => addEvent("ProgramFromMenuClicked", {})}>програма</Button>
              <Button name="NavTestButton" href='https://zno.mavka.org' active={props.selected === "tests"} onClick={(e) => addEvent("TestFromMenuClicked", {})}>тести</Button>
{/*href='https://zno.mavka.org'*/}
            </div>
          }
          {
            user === undefined ?
              <Button onClick={handleLoggedOut} style={{ opacity: 0 }}>вийти</Button>
              :
              (!user || user.isAnonymous) ?
                <Button name="NavLoginButton" onClick={() => setOpenedLogin(true)} variant="outlined">увійти</Button>
                :
                <Button name="NavLogoutButton" onClick={handleLoggedOut}>вийти</Button>
              // href='/'
          }
        </Grid>
      </Box>


      <LoginDialog open={openedLogin} onClose={handleCloseLogin} handleTelegramResponse={handleTelegramResponse} />

    </Box>
  )
}

export default NavBar
