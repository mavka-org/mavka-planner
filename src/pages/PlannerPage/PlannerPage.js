import React from 'react'
import PlannerScreen from './PlannerScreen'
import PlannerSetupScreen from "./PlannerSetupScreen"

const getUserPlanner = (subject) => {
  return require('./sample.json')
}

const PlannerPage = (props) => {

  const planner = getUserPlanner(props.subject)

  if (planner) {
    return (<PlannerScreen planner={planner} {...props}/>)
  } else {
    return (<PlannerSetupScreen {...props}/>)
  }
}

export default PlannerPage
