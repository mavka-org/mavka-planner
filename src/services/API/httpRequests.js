import axios from 'axios'

// User

export const setUserInfo = async (userToken, userInfo) => {
    const response = await axios.post(
        `https://mvp-api-5dvjwdatfq-ew.a.run.app/user/${userToken}`, {
            user: JSON.stringify(userInfo),
    }, { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
    )

    return response
}


// Program

export const getProgram = async () => {
    const response = await axios.get('https://mvp-api-5dvjwdatfq-ew.a.run.app/program/math')
    return response
}


export const getTopic = async (topic_id) => {
    const response = await axios.get(`https://mvp-api-5dvjwdatfq-ew.a.run.app/topic/math/${topic_id}`)
    return response
}


// Planner

export const getUserPlanner = async (user, subject) => {

  if (user) {
    if (!user.isAnonymous) {
      const userToken = await user.getIdToken()
      console.log('getting user planner')
      const response = await axios.get(`https://mvp-api-5dvjwdatfq-ew.a.run.app/planner/${userToken}/${subject}`)
      console.log('got planner')
      return response
    }
  }

  return null
}

export const deleteUserPlanner = async (user, subject) => {

  if (user) {
    if (!user.isAnonymous) {
      await user.getIdToken().then((userToken) => {
        axios.delete(`https://mvp-api-5dvjwdatfq-ew.a.run.app/planner/${userToken}/${subject}`)
      })
    }
  }

  return null
}

export const getDefaultPlanner = async (subject, config) => {

  const response = await axios.post(
      `https://mvp-api-5dvjwdatfq-ew.a.run.app/defaultPlanner/${subject}`, {
          config: JSON.stringify(config),
  }, { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
  )

  return response
}

export const setUserPlanner = async (user, subject, config) => {

  if (user) {
    if (!user.isAnonymous) {
      const userToken = await user.getIdToken()
      const response = await axios.post(
          `https://mvp-api-5dvjwdatfq-ew.a.run.app/planner/${userToken}/${subject}`, {
              config: JSON.stringify(config),
      }, { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
      )

      return response
    }
  }

  return null
}

export const updateUserPlanner = async (user, subject, changes) => {

  if (user) {
    if (!user.isAnonymous) {
      await user.getIdToken().then((userToken) => {

        axios.put(
            `https://mvp-api-5dvjwdatfq-ew.a.run.app/planner/${userToken}/${subject}`,
            JSON.stringify({changes: changes }),
          { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
        )

      })
    }
  }

  return null
}


// Questions

const api_url = 'https://mavka-api-5dvjwdatfq-ey.a.run.app'

export const getTestsLists = async (subject) => {
    //const response = await axios.get(`https://mvp-api-5dvjwdatfq-ew.a.run.app/all_tests_topics/${subject}`)
    // sample
    const response = require('./getTestsLists_sample.json');

    return response
}

export const getQuestionsByTest = async (test_id) => {
  // const response = await axios.put(`${api_url}/getQuestions`, { 
  //   test: test_id, 
  // })

  // return response 

  return require('./getQuestionsByTest_sample.json');
}


// Analytics

export const addAnalyticsEvent = async (user, eventName, params, isTesting) => {

    if (user) {
         await user.getIdToken().then(
            (userToken) => {
                axios.post(
                    `https://mvp-api-5dvjwdatfq-ew.a.run.app/add_event/${eventName}/${userToken}/${user.isAnonymous}`,
                    JSON.stringify({params: params, isTesting: isTesting}),
                    {headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}}
                )
            }
        )
      }

}
