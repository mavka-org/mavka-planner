import React from 'react'
import AppPage from './../../components/AppPage/AppPage';
import Button from './../../components/Button/Button';
import ConfettiCanvas from './../../components/Confetti/ConfettiCanvas';
import animateConfetti from './../../components/Confetti/animateConfetti';
import PlannerHeader from './../../assets/img/planner-header.png';
import { Grid, Box } from '@material-ui/core';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';

const TestPage = (props) => {

  // confetti references
  var confettiCanvasRef = React.createRef()
  const setConfettiCanvasRef = (input) => {
    confettiCanvasRef = input
  }

  var confettiElementRef = React.createRef()

  const handleAnimateConfetti = () => {
    animateConfetti(confettiElementRef.current, confettiCanvasRef)
  }

  return (
    <AppPage
      headerIcon={<SettingsRoundedIcon />}
      handleIconClick={handleAnimateConfetti}
      headerImageSrc={PlannerHeader}
      selected="planner"
      {...props}
    >

      <ConfettiCanvas setConfettiCanvasRef={setConfettiCanvasRef}/>

      <div ref={confettiElementRef} style={{top: "50%", left: "50%"}}>TEST</div>

      <Button onClick={handleAnimateConfetti}>click</Button>


    </AppPage>
  )
}

export default TestPage
