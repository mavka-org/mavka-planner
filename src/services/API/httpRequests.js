import axios from 'axios'

export const setUserInfo = (userToken, userInfo) => {
    const response = await axios.post(
        `https://mvp-api-5dvjwdatfq-ew.a.run.app/user/${userToken}`, {
            user: userInfo,
    }, { headers: { 'Content-Type': 'text/plain' } }
    )

    return response
}

export const getProgram = () => {
    const response = await axios.get('https://mvp-api-5dvjwdatfq-ew.a.run.app/program')

    return response
}

export const getTopic = (topic_id) => {
    const response = await axios.get(`https://mvp-api-5dvjwdatfq-ew.a.run.app/topic/${topic_id}`)

    return response
}

export const getUserPlanner = (userToken, subject) => {
    const response = await axios.get(`https://mvp-api-5dvjwdatfq-ew.a.run.app/planner/${userToken}/${subject}`)

    return response
}

export const setUserPlanner = (userToken, subject, config) => {
    const response = await axios.post(
        `https://mvp-api-5dvjwdatfq-ew.a.run.app/planner/${userToken}/${subject}`, {
            config: config,
        }, { headers: { 'Content-Type': 'text/plain' } }
    )

    return response
}

export const addAnalyticsEvent = (eventName, userToken) => {
    const response = await axios.get(`https://mvp-api-5dvjwdatfq-ew.a.run.app/add_event/${eventName}/${userToken}`)

    return response
}

export const addRedirectAnalyticsEvent = (eventName, userToken, url) => {
    const response = await axios.get(`https://mvp-api-5dvjwdatfq-ew.a.run.app/add_event_redirect/${eventName}/${userToken}/${url}`)

    return response
}