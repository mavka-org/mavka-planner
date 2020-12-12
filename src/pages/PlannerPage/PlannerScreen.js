import React from 'react'
import AppPage from './../../components/AppPage/AppPage';
import Week from './Week';
import ConfettiCanvas from './../../components/Confetti/ConfettiCanvas';
import animateConfetti from './../../components/Confetti/animateConfetti';
import PlannerHeader from './../../assets/img/planner-header.png';
import { Grid, Box } from '@material-ui/core';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import PlannerSettingsDialog from './PlannerSettingsDialog'
import { deleteUserPlanner } from './../../services/API/httpRequests';

const PlannerScreen = (props) => {

  const { planner, deletePlanner } = props

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
    setSettingsOpen(true);
  };

  const handleSettingsClose = () => {
    setSettingsOpen(false);
  };

  const handleClickDeletePlanner = () => {
    setSettingsOpen(false);
    deletePlanner();
  }

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
        handleClickDeletePlanner={handleClickDeletePlanner}
      />

    </AppPage>
  )
}

export default PlannerScreen
