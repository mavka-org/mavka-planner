import React from 'react'
import AppPage from './../../components/AppPage/AppPage';
import PlannerHeader from './../../assets/img/planner-header.png';
import Planner from './../../models/planner/planner';
import { LargeButton } from './../../components/Button/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import MuiButton from '@material-ui/core/Button';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';


const json = require('./../../models/planner/sample.json')
const planner = new Planner(json)
console.log(planner.weeks)

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
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const classes = useStyles();
  return (
    <AppPage
      headerIcon={<SettingsRoundedIcon />}
      headerImageSrc={PlannerHeader}
      selected="planner"
    >
      {planner.weeks.map((week, index) => {
        return (
          <Grid container>
            <Grid item xs={8}>
              <Typography variant="h6">тиждень {index}</Typography>
              {week.events.map((elem, index, array) => {
                return (
                  <Grid container direction="row" justify="space-evenly" alignItems="center">
                    <Grid item>
                      <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item> {elem.completed === true ?
                          <Checkbox
                          defaultChecked
                          color="primary"
                          inputProps={{ 'aria-label': 'secondary checkbox' }}
                        /> :
                          <Checkbox
                          defaultChecked
                          indeterminate
                          inputProps={{
                            'aria-label': 'indeterminate checkbox',
                          }}
                        />

                        }</Grid>
                        <Grid item><Typography>{elem.title}</Typography></Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                )
              })}
            </Grid>
            <Grid item xs={4}>
              <Typography>
                {week.dates}
              </Typography>
              {/* сюда пожалуйста пропиши возврат кнопки */}
              {/* {week.events.map((element, index) => {
                return (
                  {element.type == 'topic' ?? <button>f</button>}
                ),
              })} */}
            </Grid>
          </Grid>


        )
      })}
    </AppPage>
  )
}

export default Landing
