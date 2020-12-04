import React from 'react'
import AppPage from './../../components/AppPage/AppPage';
import PlannerHeader from './../../assets/img/planner-header.png';
import Planner from './../../models/planner/planner';
import { RoundButton } from './../../components/Button/Button';
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
  EventTitle: {
    paddingTop: "9px",
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

            <Grid container direction="row">

              <Grid item xs={8}>
                <Typography variant="h5">тиждень {index}</Typography>
              </Grid>

              <Grid item xs={4}>
                <Typography>
                  {week.dates}
                </Typography>
              </Grid>

            </Grid>

              {week.events.map((event) => {
                return (
                  <Grid container direction="row">

                    <Grid item container direction="row" wrap="nowrap" xs={8}>

                      <Grid item>
                        <Checkbox
                          checked={event.completed}
                          onChange={event.change_completed}
                          color="primary"
                          inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                      </Grid>

                      <Grid item>
                        <Typography className={classes.EventTitle}>{event.title}</Typography>
                      </Grid>

                    </Grid>

                    <Grid item xs={4}>
                      <RoundButton size="small" variant="contained" color="primary">перейти</RoundButton>
                    </Grid>

                  </Grid>
                )
              })}

          </Grid>

        )
      })}
    </AppPage>
  )
}

export default Landing
