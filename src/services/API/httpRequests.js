import axios from 'axios'

export const setUserInfo = async (userToken, userInfo) => {
    const response = await axios.post(
        `https://mvp-api-5dvjwdatfq-ew.a.run.app/user/${userToken}`, {
            user: JSON.stringify(userInfo),
    }, { headers: { 'Content-Type': 'application/json' } }
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


export const getUserPlanner = async (user, subject) => {

  if (user) {
      const userToken = await user.getIdToken()
      const response = await axios.get(`https://mvp-api-5dvjwdatfq-ew.a.run.app/planner/${userToken}/${subject}`)
      return response
    }

  return null
}

export const getDefaultPlanner = async (subject, config) => {

  const response = await axios.post(
      `https://mvp-api-5dvjwdatfq-ew.a.run.app/getDefaultPlanner/${subject}`, {
          config: JSON.stringify(config),
    }, { headers: { 'Content-Type': 'application/json' } }
  )

  return response
}

export const setUserPlanner = async (user, subject, config) => {

  if (user) {
    const userToken = await user.getIdToken()
    console.log('userToken', userToken)
    console.log('typeof', typeof userToken)
    const response = await axios.post(
        `https://mvp-api-5dvjwdatfq-ew.a.run.app/planner/${userToken}/${subject}`, {
            config: JSON.stringify(config),
      }, { headers: { 'Content-Type': 'application/json' } }
    )

    return response
  }

  return null
}


export const addAnalyticsEvent = async (user, eventName) => {

  if (user) {
    let userToken = await user.getIdToken()
    const response = await axios.get(`https://mvp-api-5dvjwdatfq-ew.a.run.app/add_event/${eventName}/${userToken}`)
    return response
  }

  return null
}
