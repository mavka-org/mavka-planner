import React from 'react'
import PlannerScreen from './PlannerScreen'
import PlannerSetupScreenNew from "./PlannerSetupScreenNew.js"


const PlannerPage = () => {

  const user = {
    loggedIn: true
  }

  if (user.loggedIn) {
    return (<PlannerScreen/>)
  } else {
    return (<PlannerSetupScreenNew/>)
  }
}

export default PlannerPage
