import React, { useContext, useEffect } from 'react'
import { UserContext } from './../../providers/UserProvider'
import PlannerScreen from './PlannerScreen'
import PlannerSetupScreen from "./PlannerSetupScreen"
import { Typography } from '@material-ui/core';
import { getUserPlanner, setUserPlanner, getDefaultPlanner } from './../../services/API/httpRequests';

const PlannerPage = (props) => {

  const { user, subject } = props

  const [fakeLoading, setFakeLoading] = React.useState(true)
  const [planner, setPlanner] = React.useState(undefined);
  const [ownsPlanner, setOwnsPlanner] = React.useState(undefined);

  // delay showing the next page to get user to auto login
  useEffect( () => {
    setTimeout(function() {
          setFakeLoading(false)
      }, 500);
   }, []);

  console.log('user', user)
  console.log('planner', planner)
  console.log('ownsPlanner', ownsPlanner)

  // receiving user
  if (user) {
    if (ownsPlanner === undefined) {
      getUserPlanner(user, subject.id).then((plannerResponse) => {
        if (plannerResponse.data.ownsPlanner) {
          setOwnsPlanner(true)
          setPlanner(plannerResponse.data)
        } else {
          setOwnsPlanner(false)
        }
      })
    }
  }

  const createNewPlanner = (selectedTopicIds) => {
    let config = {
      'exclude_topics_ids': selectedTopicIds
    }
    if (user) {
      // for logged in user
      setUserPlanner(user, subject.id, config).then((plannerResponse) => {
        setOwnsPlanner(true)
        setPlanner(plannerResponse.data)
      })
    } else {
      // for unlogged in user
      getDefaultPlanner(subject.id, config).then((plannerResponse) => {
        setOwnsPlanner(true)
        setPlanner(plannerResponse.data)
      })
    }
  }

  if (!fakeLoading) {
    if (ownsPlanner !== true) {
      return (<PlannerSetupScreen createNewPlanner={createNewPlanner} {...props}/>)
    }
    else {
      if (planner) {
        return (<PlannerScreen planner={planner} {...props}/>)
      }
    }
  }

  return (<Typography>Loading</Typography>)
}

export default PlannerPage
