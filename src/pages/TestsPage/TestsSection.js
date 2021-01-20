import React, { useContext, useEffect } from 'react'
import TestCard from './TestCard'
import Loading from './../../components/Loading/Loading';
import { Typography } from '@material-ui/core';

const TestsSection = (props) => {

  const [yearIdx, setYearIdx] = React.useState(1);

  const getTestCards = () => {
    let year = props.tests.years[yearIdx].year
    let sessions = props.tests.years[yearIdx].sessions
    return sessions.map((testJson) => {
      return (
        <>
          <br/>
          <TestCard id={testJson.id} name={`${year} ${testJson.session}`} href={`/practice/test/${testJson.id}`}/>
        </>
      )
    })

  }

  const handleSelectYearClicked = () => {
    // open a dialog
  }

  if (props.tests.years.length > 0) {
    return(
      <>
        <p> {props.name} </p>
        <button onClick={handleSelectYearClicked}>Change year</button>
        {
          getTestCards()
        }

      </>
    )
  }

  return(
    <p> Тестів поки нема... </p>
  )
}

export default TestsSection
