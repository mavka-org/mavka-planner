import React, {useEffect} from 'react'
import AppPage from './../../components/AppPage/AppPage';
import Week from './Week';
import PlannerHeader from './../../assets/img/planner-header.png';
import { Grid } from '@material-ui/core';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import PlannerSettingsDialog from './PlannerSettingsDialog'
import {addAnalyticsEvent} from './../../services/API/httpRequests';
import {UserContext} from "../../providers/UserProvider";
import {useContext} from "react";
import {SubjectContext} from "../../providers/SubjectProvider";
import {TrackingContext} from '@vrbo/react-event-tracking'

const PlannerScreen = (props) => {

  const { planner, deletePlanner } = props
  const user = useContext(UserContext);
  const subject = useContext(SubjectContext)[0]
  const tracking = useContext(TrackingContext)


  useEffect(
      () => {
        if(user) {
          tracking.trigger("PlannerPageViewed")
        }
      },
      [user]
  )

  // settings button
  const [settingsOpen, setSettingsOpen] = React.useState(false);

  const handleClickSettingsOpen = () => {
    tracking.trigger("PlannerSettingsClicked")

    setSettingsOpen(true);
  };

  const handleSettingsClose = () => {
    setSettingsOpen(false);
  };

  // weeks
  const getWeeks = () => {
    return planner.weeks.map((weekJson, weekIdx) => { return ( <Week idx={weekIdx} json={weekJson} /> )} )
  }

  return (
    <AppPage
      headerIcon={<SettingsRoundedIcon />}
      handleIconClick={handleClickSettingsOpen}
      headerImageSrc={PlannerHeader}
      selected="planner"
      {...props}
    >

      <Grid container spacing={2}>
          {getWeeks()}
      </Grid>

      <PlannerSettingsDialog
        open={settingsOpen}
        onClose={handleSettingsClose}
        deletePlanner={deletePlanner}
      />

    </AppPage>
  )
}

export default PlannerScreen
