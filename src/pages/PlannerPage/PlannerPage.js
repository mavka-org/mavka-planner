import React, { useContext } from 'react'
import { UserContext } from './../../providers/UserProvider'
import PlannerScreen from './PlannerScreen'
import PlannerSetupScreen from "./PlannerSetupScreen"
import { Typography } from '@material-ui/core';
import { getUserPlanner, setUserPlanner, getDefaultPlanner } from './../../services/API/httpRequests';

const PlannerPage = (props) => {

  const user = useContext(UserContext)

  const [planner, setPlanner] = React.useState(null);
  const [ownsPlanner, setOwnsPlanner] = React.useState(null);

  if (ownsPlanner === null) {
    if (user) {
      getUserPlanner(user, props.subject.id).then((ownsPlannerResponse) => {
        if (ownsPlannerResponse.data.ownsPlanner) {
          setOwnsPlanner(true)
          setPlanner(ownsPlannerResponse.data)
        } else {
          setOwnsPlanner(false)
        }
      })
    }
    else {
      setOwnsPlanner(false)
    }
  }

  const createNewPlanner = (selectedTopicIds) => {
    let config = {
      'exclude_topics_ids': selectedTopicIds
    }
    if (user) {
      // for logged in user
      setUserPlanner(user, props.subject.id, config).then((plannerResponse) => {
        setOwnsPlanner(true)
        setPlanner(plannerResponse.data)
      })
    } else {
      // for unlogged in user
      getDefaultPlanner(props.subject.id, config).then((plannerResponse) => {
        setOwnsPlanner(true)
        setPlanner(plannerResponse.data)
      })
    }
  }

  if (ownsPlanner === false) {
    return (<PlannerSetupScreen createNewPlanner={createNewPlanner} {...props}/>)
  }
  else {
    if (planner === true) {
      return (<PlannerScreen planner={planner} {...props}/>)
    } else {
      return (<Typography>Loading</Typography>)
    }
  }
}

export default PlannerPage
