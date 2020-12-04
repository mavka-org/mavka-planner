import { RoundButton, Button } from './../../components/Button/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MavkaSmallLogo from './../../assets/img/mavka-small-logo.png';
import MavkaTextLogo from './../../assets/img/mavka-text-logo.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  NavBar: {
    width: "100%"
  },
  Logo: {
    height: "24px",
  }
}));

const NavBar = (props) => {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center" py={1}>

        <Box flexGrow={1}>
          <img src={props.selected===undefined ? (MavkaTextLogo) : (MavkaSmallLogo)} className={classes.Logo} />
        </Box>

        <Box>
        <Grid item container justifySelf="flex-end" direction="row" alignItems="center" spacing="1">
        {
          props.selected!==undefined &&
          <div>
            <Button style={props.selected==="planner" ? {fontWeight: "700"} : {}}>планер</Button>
            <Button style={props.selected==="program" ? {fontWeight: "700"} : {}}>програма</Button>
            <Button style={props.selected==="tests" ? {fontWeight: "700"} : {}}>тести</Button>
          </div>
        }
        {
          props.user===undefined ?
            (<RoundButton variant="outlined">увійти</RoundButton>) :
            (<Button style={props.selected==="profile" ? {fontWeight: "700"} : {}}>профіль</Button>)
        }
        </Grid>
        </Box>

      </Box>
  )
}

export default NavBar
