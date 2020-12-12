import React, { useContext, useEffect } from 'react'
import { UserContext } from './../../providers/UserProvider'
import PlannerScreen from './PlannerScreen'
import PlannerSetupScreen from "./PlannerSetupScreen"
import Loading from './../../components/Loading/Loading';
import { Typography } from '@material-ui/core';
import { getUserPlanner, setUserPlanner, getDefaultPlanner } from './../../services/API/httpRequests';

const PlannerPage = (props) => {

  const { user, subject } = props

  console.log(user)

  const [fakeLoading, setFakeLoading] = React.useState(true)
  const [planner, setPlanner] = React.useState(undefined);
  const [ownsPlanner, setOwnsPlanner] = React.useState(undefined);

  // delay showing the next page to get user to auto login
  useEffect( () => {
    setTimeout(function() {
          setFakeLoading(false)
      }, 700);
   }, []);

  // receiving user
  if (user) {
    if (!user.isAnonymous) {
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
  }

  const createNewPlanner = (selectedTopicIds) => {
    let config = {
      'exclude_topics_ids': selectedTopicIds
    }
    if (!user.isAnonymous) {
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
      return (<PlannerSetupScreen createNewPlanner={createNewPlanner} setOwnsPlanner={setOwnsPlanner} {...props}/>)
    }
    else {
      if (planner) {
        return (<PlannerScreen planner={planner} {...props}/>)
      }
    }
  }

  return (<Loading />)
}

export default PlannerPage
