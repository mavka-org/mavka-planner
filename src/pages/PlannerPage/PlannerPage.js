import React, { useContext } from 'react'
import { UserContext } from './../../providers/UserProvider'
import PlannerScreen from './PlannerScreen'
import PlannerSetupScreen from "./PlannerSetupScreen"
import { getUserPlanner, getNewUserPlanner } from './../../services/API/httpRequests';

const PlannerPage = (props) => {

  const user = useContext(UserContext)

  const [planner, setPlanner] = React.useState(getUserPlanner(user, props.subject.name));

  const createNewPlanner = (selectedTopicIds) => {
    let config = {
      'exclude_topics_ids': selectedTopicIds
    }
    getNewUserPlanner(props.subject.name, config).then((plannerResponse) => {
      setPlanner(plannerResponse)
    })
  }

  if (false) {
    return (<PlannerScreen planner={planner} {...props}/>)
  } else {
    return (<PlannerSetupScreen createNewPlanner={createNewPlanner} {...props}/>)
  }
}

export default PlannerPage
