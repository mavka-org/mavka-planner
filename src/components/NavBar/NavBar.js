import React, { useContext } from 'react';
import { UserContext } from './../../providers/UserProvider'
import { NavLink } from 'react-router-dom';
import Button from './../../components/Button/Button';
import {Grid, Box, Typography} from '@material-ui/core';
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

  const user = useContext(UserContext)
  const [openedLogin, setOpenedLogin] = React.useState(false)

  const handleCloseLogin = () => {
    setOpenedLogin(false)
  }

  const handleLoggedOut = () => {
    signOut()
  }

  return (
    <Box display="flex" alignItems="center" py={1}>

        <Box flexGrow={1}>
          <NavLink to="/">
            <img src={props.selected===undefined ? (MavkaTextLogo) : (MavkaSmallLogo)} className={classes.Logo} />
          </NavLink>
        </Box>

        <Box display="flex" flexWrap="nowrap">
        <Grid item container justifySelf="flex-end" direction="row" alignItems="center" style={{flexWrap: "nowrap"}}>
        {
          props.selected!==undefined &&
          <div>
            <Button href='/planner' active={props.selected==="planner"}>планер</Button>
            <Button href='/program' active={props.selected==="program"}>програма</Button>
            <Button href='https://zno.mavka.org' active={props.selected==="tests"}>тести</Button>
          </div>
        }
        {
          user === undefined ?
              <Button onClick={handleLoggedOut} style={{opacity: 0}}>вийти</Button>
          :
            user ?
              <Button onClick={handleLoggedOut}>вийти</Button>
              :
              <Button onClick={() => setOpenedLogin(true)} variant="outlined">увійти</Button>
        }
        </Grid>
        </Box>

        <LoginDialog open={openedLogin} onClose={handleCloseLogin} handleTelegramResponse={handleTelegramResponse}/>

      </Box>
  )
}

export default NavBar
