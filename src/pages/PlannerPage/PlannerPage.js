import React, { useContext, useEffect } from 'react'
import { UserContext } from './../../providers/UserProvider'
import PlannerScreen from './PlannerScreen'
import PlannerSetupScreen from "./PlannerSetupScreen"
import Loading from './../../components/Loading/Loading';
import { getUserPlanner, setUserPlanner, getDefaultPlanner, deleteUserPlanner } from './../../services/API/httpRequests';
import {addAnalyticsEvent} from '../../services/API/httpRequests.js'

const PlannerPage = (props) => {

  const { user, subject } = props

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

  const deletePlanner = () => {
    // TODO need to notify user of the request loading
    deleteUserPlanner().then((response) => {
      setOwnsPlanner(false);
    })
  };

  if (!fakeLoading) {
    if (ownsPlanner !== true) {
      return (<PlannerSetupScreen createNewPlanner={createNewPlanner} deletePlanner={deletePlanner} {...props}/>)
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
