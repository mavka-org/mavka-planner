import axios from 'axios'
import {auth} from './../Firebase/firebase'

export const setUserInfo = async (userToken, userInfo) => {
    const response = await axios.post(
        `https://mvp-api-5dvjwdatfq-ew.a.run.app/user/${userToken}`, {
            user: userInfo,
    }, { headers: { 'Content-Type': 'text/plain' } }
    )

    return response
}


export const getProgram = async () => {
    const response = await axios.get('https://mvp-api-5dvjwdatfq-ew.a.run.app/program')

    return response
}


export const getTopic = async (topic_id) => {
    const response = await axios.get(`https://mvp-api-5dvjwdatfq-ew.a.run.app/topic/${topic_id}`)


    return response
}


export const getUserPlanner = async (subject) => {

  let user = auth.currentUser

  if (user) {
    let userToken = user.getIdToken()
    const response = await axios.get(`https://mvp-api-5dvjwdatfq-ew.a.run.app/planner/${userToken}/${subject}`)
    return response
  }

  return null
}

export const getNewUserPlanner = async (subject, config) => {
  // get a new planer of a user
  let user = auth.currentUser

  if (user) {
    // if logged in, set a new planner
    const response = setUserPlanner(subject, config)
    return response
  } else {
    // else get a default planner //TODO create the request
    const response = await axios.post(
        `https://mvp-api-5dvjwdatfq-ew.a.run.app/defaultPlanner/${subject}`, {
            config: config,
        }, { headers: { 'Content-Type': 'text/plain' } }
    )
    return response
  }

  return null
}

export const setUserPlanner = async (subject, config) => {

  let user = auth.currentUser

  if (user) {
    let userToken = user.getIdToken()

    const response = await axios.post(
        `https://mvp-api-5dvjwdatfq-ew.a.run.app/planner/${userToken}/${subject}`, {
            config: config,
        }, { headers: { 'Content-Type': 'text/plain' } }
    )

    return response
  }

  return null
}


export const addAnalyticsEvent = async (eventName) => {

  let user = auth.currentUser

  if (user) {
    let userToken = user.getIdToken()
    const response = await axios.get(`https://mvp-api-5dvjwdatfq-ew.a.run.app/add_event/${eventName}/${userToken}`)
    return response
  }

  return null
}
