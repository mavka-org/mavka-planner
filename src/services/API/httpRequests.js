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
  console.log('getting program')
    const response = await axios.get('https://mvp-api-5dvjwdatfq-ew.a.run.app/program/math')

    return response
}


export const getTopic = async (topic_id) => {
  console.log('getting topic')
    const response = await axios.get(`https://mvp-api-5dvjwdatfq-ew.a.run.app/topic/math/${topic_id}`)

    return response
}


export const getUserPlanner = async (user, subject) => {

  if (user) {
      const userToken = await user.getIdToken()
      console.log(userToken)
      const response = await axios.get(`https://mvp-api-5dvjwdatfq-ew.a.run.app/planner/${userToken}/${subject}`)
      return response
    }

  return null
}

export const deleteUserPlanner = async (user, subject) => {

  if (user) {
    const userToken = await user.getIdToken()
    const response = await axios.delete(`https://mvp-api-5dvjwdatfq-ew.a.run.app/planner/${userToken}/${subject}`)
    console.log(response)
    return response
  }

  return null
}

export const getDefaultPlanner = async (subject, config) => {

  const response = await axios.post(
      `https://mvp-api-5dvjwdatfq-ew.a.run.app/defaultPlanner/${subject}`, {
          config: JSON.stringify(config),
    }, { headers: { 'Content-Type': 'application/json' } }
  )

  return response
}

export const setUserPlanner = async (user, subject, config) => {

  if (user) {
    const userToken = await user.getIdToken()
    const response = await axios.post(
        `https://mvp-api-5dvjwdatfq-ew.a.run.app/planner/${userToken}/${subject}`, {
            config: JSON.stringify(config),
      }, { headers: { 'Content-Type': 'application/json' } }
    )

    return response
  }

  return null
}

export const updateUserPlanner = async (user, subject, changes) => {

  if (user) {
    const userToken = await user.getIdToken()

    const response = await axios.put(
        `https://mvp-api-5dvjwdatfq-ew.a.run.app/planner/${userToken}/${subject}`,
        JSON.stringify({changes: changes }),
        { headers: { 'Content-Type': 'application/json' } }
    )


    return response
  }

  return null
}


export const addAnalyticsEvent = async (user, eventName, params) => {

    if (user) {
        let userToken = await user.getIdToken()

        const response = await axios.post(
            `https://mvp-api-5dvjwdatfq-ew.a.run.app/add_event/${eventName}/${userToken}/${user.isAnonymous}`,
            JSON.stringify({params: params}),
            { headers: { 'Content-Type': 'application/json' } }
        )
        return response
      }
    return null
}
