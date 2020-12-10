import axios from 'axios'
import firebase from './../Firebase/firebase'

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

  let userToken = firebase.auth().currentUser.getIdToken()
  if (userToken) {
    const response = await axios.get(`https://mvp-api-5dvjwdatfq-ew.a.run.app/planner/${userToken}/${subject}`)
    return response
  }

  return null
}


export const setUserPlanner = async (subject, config) => {

  let userToken = firebase.auth().currentUser.getIdToken()
  const response = await axios.post(
      `https://mvp-api-5dvjwdatfq-ew.a.run.app/planner/${userToken}/${subject}`, {
          config: config,
      }, { headers: { 'Content-Type': 'text/plain' } }
  )

  return response
}


export const addAnalyticsEvent = async (eventName) => {

  let userToken = firebase.auth().currentUser.getIdToken()
  const response = await axios.get(`https://mvp-api-5dvjwdatfq-ew.a.run.app/add_event/${eventName}/${userToken}`)

  return response
}


export const addRedirectAnalyticsEvent = async (eventName, url) => {

  let userToken = firebase.auth().currentUser.getIdToken()
  const response = await axios.get(`https://mvp-api-5dvjwdatfq-ew.a.run.app/add_event_redirect/${eventName}/${userToken}/${url}`)

  return response
}
