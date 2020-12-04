import React from 'react'
import AppPage from './../../components/AppPage/AppPage';
import PlannerHeader from './../../assets/img/planner-header.png';
import Planner from './../../models/planner/planner';
import Button from './../../components/Button/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';

const json = require('./../../models/planner/sample.json')
const planner = new Planner(json)
console.log(planner.weeks)

const useStyles = makeStyles((theme) => ({
  EventTitle: {
    paddingTop: "9px",
  },
  DatesTitle: {
    textAlign: "right",
    fontWeight: "bold"
  },
  WeekTitleItem: {
    paddingBottom: theme.spacing(2)
  }
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

      <Grid container spacing="2">
          {planner.weeks.map((week, index) => {
            return (
              <Grid item container>

                <Grid item container direction="row" alignItems="flex-end" className={classes.WeekTitleItem}>

                  <Grid item xs={8}>
                    <Typography variant="h4" textBold>тиждень {index + 1}</Typography>
                  </Grid>

                  <Grid item xs={4}>
                    <Typography className={classes.DatesTitle}>
                      {week.dates}
                    </Typography>
                  </Grid>

                </Grid>

                {week.events.map((elem, index, array) => {

                  return (
                    <Grid item container direction="row">

                      <Grid item container direction="row" wrap="nowrap" xs={8}>

                        <Grid item>
                          <Checkbox
                            checked={elem.completed}
                            onChange={handleChange}
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                          />
                        </Grid>

                        <Grid item>
                          <Typography className={classes.EventTitle}>{elem.title}</Typography>
                        </Grid>

                      </Grid>

                      <Grid container xs={4} direction='column' justify="center" alignItems="flex-end">
                        {elem.type === 'text' ? ''
                        :
                        (elem.type === 'url' ?
                        <Typography variant="subtitle2"><Link href={elem.url}>перейти </Link></Typography> : <Button size="small" variant="contained" color="primary">перейти</Button>)}

                      </Grid>
                      {/* <RoundButton size="small" variant="contained" color="primary">перейти</RoundButton> */}
                    </Grid>
                  )
                })}

              </Grid>

            )
          })}

      </Grid>

    </AppPage>
  )
}

export default Landing
