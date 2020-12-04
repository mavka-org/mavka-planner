import AppPage from './../../components/AppPage/AppPage';
import PlannerHeader from './../../assets/img/planner-header.png';
import Planner from './../../models/planner/planner';
import { LargeButton } from './../../components/Button/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import MuiButton from '@material-ui/core/Button';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';

const json = require('./../../models/planner/sample.json')
const planner = new Planner(json)
console.log(planner)


const useStyles = makeStyles((theme) => ({
  Grid: {
    width: "100%",
    justifyContent: "center",
  },
  Img: {
    width: "250px",
  },
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <AppPage
      headerIcon={<SettingsRoundedIcon/>}
      headerImageSrc={PlannerHeader}
      selected="planner"
    >
    </AppPage>
  )
}

export default Landing
