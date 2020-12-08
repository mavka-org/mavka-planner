import NavBar from '../../components/NavBar/NavBar'
import LoginPng from './../../assets/img/login.png'
import { LargeButton } from '../../components/Button/Button';
import { Grid, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TelegramLoginButton from 'react-telegram-login';


const Login = (props) => {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Grid container spacing="1">

        <Grid item>
          <img src={LoginPng} className="header_image"/>
        </Grid>

        <Grid item>
          <Typography className="defaultText">заходь за допомогою </Typography>
        </Grid>

        <Grid style={{width: '100%'}} item>
          <TelegramLoginButton dataOnauth={props.handleTelegramResponse} botName="kukolya_bot" buttonSize="large" usePic={false}/>
        </Grid>

        <Grid item style={{width: '100%'}}>
          <LargeButton
           fullWidth
           variant="contained"
           color="primary"
          >
          інше
          </LargeButton>
        </Grid>

        <Grid item>
          <Link
            component="button"
            variant="body1"
            onClick={() => {

            }}
          >
            зареєструватися
          </Link>
        </Grid>


      </Grid>
    </div>
  )
}

export default Login
