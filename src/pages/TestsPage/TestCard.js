import React, { useContext, useEffect } from 'react'
import { Typography } from '@material-ui/core';

const TestCard = (props) => {
  return(
    <>
      <button>Name: {props.name}, Id: {props.id} </button>
    </>
  )
}

export default TestCard
