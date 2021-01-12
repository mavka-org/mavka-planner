import React, { useContext, useEffect } from 'react'
import TestsSection from './TestsSection'
import Loading from './../../components/Loading/Loading';
import { Typography } from '@material-ui/core';
import { getTestsLists } from './../../services/API/httpRequests';
import { UserContext } from './../../providers/UserProvider';
import { SubjectContext } from './../../providers/SubjectProvider';
import { TrackingContext } from '@vrbo/react-event-tracking'

const TestsPage = (props) => {

  const user = useContext(UserContext)
  const subject = useContext(SubjectContext)[0]
  const tracking = useContext(TrackingContext)

  const [testsLists, setTestsLists] = React.useState(undefined);

  if (testsLists === undefined) {
    getTestsLists(subject.id).then((testsListsResponse) => {
      setTestsLists(testsListsResponse)
    })
  }

  if(testsLists) {
    console.log('testsLists', testsLists.by_sessions)
    return(
      <>
        <TestsSection name="ЗНО минулих років" tests={testsLists.by_sessions}/>
      </>
    )
  }

  return (<Loading />)
}

export default TestsPage
