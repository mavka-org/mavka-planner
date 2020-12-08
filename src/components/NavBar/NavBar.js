import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './../../components/Button/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MavkaSmallLogo from './../../assets/img/mavka-small-logo.png';
import MavkaTextLogo from './../../assets/img/mavka-text-logo.png';
import { makeStyles } from '@material-ui/core/styles';
import LoginDialog from './../../components/LoginDialog/LoginDialog';
import {useHistory} from 'react-router-dom';
import { handleTelegramResponse } from './../../services/Firebase/Authenticate'

const useStyles = makeStyles((theme) => ({
  NavBar: {
    width: "100%"
  },
  Logo: {
    height: "24px",
  },
}));


const NavBar = (props) => {

  const classes = useStyles();

  const [loginOpen, setLoginOpen] = React.useState(false);

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

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
            <Button href='/planner' style={props.selected==="planner" ? {fontWeight: "700"} : {}}>планер</Button>
            <Button href='/program' style={props.selected==="program" ? {fontWeight: "700"} : {}}>програма</Button>
            <Button href='https://zno.mavka.org' style={props.selected==="tests" ? {fontWeight: "700"} : {}}>тести</Button>
          </div>
        }
        {
          props.user===undefined ?

            (<Button onClick={handleLoginOpen} variant="outlined">увійти</Button>) :
            (<Button style={props.selected==="profile" ? {fontWeight: "700"} : {}}>вийти</Button>)
        }
        </Grid>
        </Box>

        <LoginDialog open={loginOpen} handleClose={handleLoginClose} handleTelegramResponse={handleTelegramResponse} />

      </Box>
  )
}

export default NavBar
