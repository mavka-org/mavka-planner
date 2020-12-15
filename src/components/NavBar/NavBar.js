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

const useStyles = makeStyles((theme) => ({
  Logo: {
    height: "24px",
  },
}));


const NavBar = (props) => {

  const classes = useStyles();

  const user = useContext(UserContext)
  const [openedLogin, setOpenedLogin] = React.useState(false)

  const addEvent = (name, par) => {
    addAnalyticsEvent(user, name, par)
  }

  const handleCloseLogin = () => {
    setOpenedLogin(false)
  }

  const handleLoggedOut = () => {
    addEvent("LogOutClicked", {})
    signOut()
  }

  return (
    <Box display="flex" alignItems="center" py={1}>

      <Box flexGrow={1}>
        <NavLink to="/" onClick={(e) => addEvent("LogoFromMenuClicked", {})}>
          <img name="NavLandingButton" src={props.selected === undefined ? (MavkaTextLogo) : (MavkaSmallLogo)} alt="mavka" className={classes.Logo} />
        </NavLink>
      </Box>

      <Box display="flex" flexWrap="nowrap">
        <Grid item container justifySelf="flex-end" direction="row" alignItems="center" style={{ flexWrap: "nowrap" }}>
          {
            props.selected !== undefined &&
            <div>
              <Button name="NavPlannerButton" href='/planner' active={props.selected === "planner"} onClick={(e) => addEvent("PlannerFromMenuClicked", {})}>планер</Button>
              <Button name="NavProgramButton" href='/program' active={props.selected === "program"} onClick={(e) => addEvent("ProgramFromMenuClicked", {})}>програма</Button>
              <Button name="NavTestButton" href='https://tests.mavka.org' active={props.selected === "tests"} onClick={(e) => addEvent("TestFromMenuClicked", {})}>тести</Button>
            </div>
          }
          {
            user === undefined ?
              <Button onClick={handleLoggedOut} style={{ opacity: 0 }}>вийти</Button>
              :
              (!user || user.isAnonymous) ?
                <Button name="NavLoginButton" onClick={() => setOpenedLogin(true)} variant="outlined">увійти</Button>
                :
                <Button name="NavLogoutButton" href='/' onClick={handleLoggedOut}>вийти</Button>
          }
        </Grid>
      </Box>

      <LoginDialog open={openedLogin} onClose={handleCloseLogin} handleTelegramResponse={handleTelegramResponse} goToLanding={props.goToLanding}/>

    </Box>
  )
}

export default NavBar
