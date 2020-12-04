import { RoundButton, Button } from './../../components/Button/Button';
import Grid from '@material-ui/core/Grid';
import MavkaSmallLogo from './../../assets/img/mavka-small-logo.png';
import MavkaTextLogo from './../../assets/img/mavka-text-logo.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  NavBar: {
    width: "100%"
  },
  ImgWrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between"
  }
}));

const NavBar = (props) => {
  const classes = useStyles();

  return (

    <Grid container direction="row" alignItems="center" wrap="nowrap">

      <Grid item container direction="row" alignItems="center" spacing="2">
        <Grid item>
          <img className={classes.MavkaSmallLogo} src={MavkaSmallLogo} />
        </Grid>

        <Grid item>
          <img className={classes.MavkaTextLogo} src={MavkaTextLogo} />
        </Grid>
      </Grid>

      <Grid item container direction="row" alignItems="center" spacing="2">
        <Button>планер</Button>
        <Button>програма</Button>
        <Button>тести</Button>
        <Button>профіль</Button>
        <RoundButton variant="outlined">увійти</RoundButton>
      </Grid>
    </Grid>
  )
}

export default NavBar
