import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './../../components/Button/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MavkaSmallLogo from './../../assets/img/mavka-small-logo.png';
import MavkaTextLogo from './../../assets/img/mavka-text-logo.png';
import { makeStyles } from '@material-ui/core/styles';
import LoginDialog from './../../components/LoginDialog/LoginDialog';
import { getCurrentUser, handleTelegramResponse, signOut } from './../../services/Firebase/Authenticate'

const useStyles = makeStyles((theme) => ({
  Logo: {
    height: "24px",
  },
}));


const NavBar = (props) => {

  const classes = useStyles();

  const [user, setUser] = React.useState(getCurrentUser());
  const [openedLogin, setOpenedLogin] = React.useState(false)

  const handleCloseLogin = () => {
    setOpenedLogin(false)
  }

  const loginProvider = () => {
    console.log('called loginProvider')
    setUser(getCurrentUser())
    handleCloseLogin()
  }

  const handleLoggedOut = () => {
    signOut().then(() => {
      loginProvider()
    })
  }

  return (
    <Box display="flex" alignItems="center" py={1}>

        <Box flexGrow={1}>
          <NavLink to="/">
            <img src={props.selected===undefined ? (MavkaTextLogo) : (MavkaSmallLogo)} className={classes.Logo} />
          </NavLink>
        </Box>

        <Box display="flex" flexWrap="nowrap">
        <Grid item container justifySelf="flex-end" direction="row" alignItems="center" spacing="1" style={{flexWrap: "nowrap"}}>
        {
          props.selected!==undefined &&
          <div>
            <Button href='/planner' active={props.selected==="planner"}>планер</Button>
            <Button href='/program' active={props.selected==="program"}>програма</Button>
            <Button href='https://zno.mavka.org' active={props.selected==="tests"}>тести</Button>
          </div>
        }
        {
          user ?
            <Button onClick={handleLoggedOut}>вийти</Button>
            :
            <Button onClick={() => setOpenedLogin(true)} variant="outlined">увійти</Button>
        }
        </Grid>
        </Box>

        <LoginDialog open={openedLogin} onClose={handleCloseLogin} handleTelegramResponse={handleTelegramResponse} loginProvider={loginProvider}/>

      </Box>
  )
}

export default NavBar
