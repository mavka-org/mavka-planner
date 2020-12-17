import React from 'react';
import Confetti from 'react-dom-confetti';

const weekConfig = {
  angle: "90",
  spread: "90",
  startVelocity: "25",
  elementCount: "20",
  dragFriction: "0.13",
  duration: "1000",
  stagger: "15",
  width: "10px",
  height: "10px",
  perspective: "1000px",
  colors: ["#1AB2A8", "#f44336", "#ff9800"]
};

export const WeekConfetti = (props) => {

  return (
    <div style={{position: "absolute", placeSelf: "center"}}>
      <Confetti active={ props.active } config={ weekConfig }/>
    </div>
  )
}

export default WeekConfetti
