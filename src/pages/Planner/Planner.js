import React from 'react'
import AppPage from './../../components/AppPage/AppPage';
import Week from './../../components/Planner/Week';
import PlannerHeader from './../../assets/img/planner-header.png';
import { Grid, Typography } from '@material-ui/core';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const Planner = () => {

  const json = require('./../../models/planner/sample.json')

  return (
    <AppPage
      headerIcon={<SettingsRoundedIcon />}
      headerImageSrc={PlannerHeader}
      selected="planner"
    >

      <Grid container spacing="2">
          {json.weeks.map((weekJson, weekIdx) => { return ( <Week idx={weekIdx} json={weekJson} /> )} )}
      </Grid>

    </AppPage>
  )
}

export default Planner
