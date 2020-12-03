import NavBar from '../../components/NavBar/NavBar'
import LoginPng from './../../assets/img/login.png'
import { LargeButton } from './../../components/Button/Button';
import { Grid, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  Grid: {
    width: "100%",
  },
}));

const Login = () => {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Grid container spacing="1" className={classes.Grid}>

        <Grid item>
          <img src={LoginPng} className="header_image"/>
        </Grid>

        <Grid item>
          <Typography className="defaultText">заходь за допомогою </Typography>
        </Grid>

        <Grid style={{width: '100%'}} item>
          <LargeButton
           fullWidth
           variant="contained"
           color="primary"
          >
          Telegram
          </LargeButton>
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
