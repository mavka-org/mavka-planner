import React from 'react'
import PlannerScreen from './PlannerScreen'
import PlannerSetupScreen from './PlannerSetupScreen'

const PlannerPage = () => {

  const user = {
    loggedIn: true
  }

  if (user.loggedIn) {
    return (<PlannerScreen/>)
  } else {
    return (<PlannerSetupScreen/>)
  }
}

export default PlannerPage
