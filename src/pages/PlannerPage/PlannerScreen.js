import React, {useEffect} from 'react'
import AppPage from './../../components/AppPage/AppPage';
import Week from './Week';
import ConfettiCanvas from './../../components/Confetti/ConfettiCanvas';
import animateConfetti from './../../components/Confetti/animateConfetti';
import PlannerHeader from './../../assets/img/planner-header.png';
import { Grid, Box } from '@material-ui/core';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import PlannerSettingsDialog from './PlannerSettingsDialog'
import {addAnalyticsEvent, deleteUserPlanner} from './../../services/API/httpRequests';
import {UserContext} from "../../providers/UserProvider";
import {useContext} from "react";

const PlannerScreen = (props) => {

  const { planner, deletePlanner } = props
  const user = useContext(UserContext);


  useEffect(
      () => {
        if(user) {
          addAnalyticsEvent(user, "PlannerPageOpened", {"subject":props.subject.name})
        }
      },
      [user]
  )

/* TODO
  // confetti references
  var confettiCanvasRef = React.createRef()
  const setConfettiCanvasRef = (input) => {
    confettiCanvasRef = input
  }

  var confettiElementRef = React.createRef()

  const handleAnimateConfetti = () => {
    animateConfetti(confettiElementRef.current, confettiCanvasRef)
  }
  */

  // settings button
  const [settingsOpen, setSettingsOpen] = React.useState(false);

  const handleClickSettingsOpen = () => {
    addAnalyticsEvent(user, "PlannerSettingsClicked", {"subject":props.subject.name})
    setSettingsOpen(true);
  };

  const handleSettingsClose = () => {
    setSettingsOpen(false);
  };

  // weeks
  const getWeeks = () => {
    return planner.weeks.map((weekJson, weekIdx) => { return ( <Week idx={weekIdx} subject={props.subject} json={weekJson} /> )} )
  }

  return (
    <AppPage
      headerIcon={<SettingsRoundedIcon />}
      handleIconClick={handleClickSettingsOpen}
      headerImageSrc={PlannerHeader}
      selected="planner"
      {...props}
    >

    {
      /*
      <ConfettiCanvas setConfettiCanvasRef={setConfettiCanvasRef}/>

      <div ref={confettiElementRef}>TEST</div>

      <Button onClick={handleAnimateConfetti}>click</Button>
      */
    }

      <Grid container spacing="2">
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
