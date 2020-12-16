import React, {useContext} from 'react'
import {auth} from './firebase'
import { setUserInfo } from './../API/httpRequests'
import {addAnalyticsEvent} from "../API/httpRequests";
import {TrackingContext} from '@vrbo/react-event-tracking'



export const logIn = async(email, password, userInfo) => {
   // const tracking = useContext(TrackingContext)

    console.log(userInfo)
    await auth.createUserWithEmailAndPassword(email, password).then((authUser) =>{
        console.log('user created!')
        console.log(authUser)

        authUser.user.getIdToken().then((userToken) => {
            console.log(userToken)

            setUserInfo(userToken, userInfo).then((res) => {
                console.log(res)
                //tracking.trigger("SignedUp")
            })

        })
    }).catch((error) => {
        if(error.code === 'auth/email-already-in-use'){

            auth.signInWithEmailAndPassword(email, password).then((loggedUser) => {
                console.log('user logged in!')
                //tracking.trigger("LoggedIn")
            })

        }
    })
}


export const signOut = async() => {
    await auth.signOut();
}

export const signInAnonymously = async() => {
    await auth.signInAnonymously()
}

export const handleTelegramResponse = async(response) => {
    var email = 'tg_' + response.id + '@mavka.org'
    var password = response.id
    password = password.toString()
    var userInfo = 
    {
        'telegram': {
            'id': response.id,
            'first_name': response.first_name,
            'last_name': response.last_name,
            'username': response.username,
            'photo_url': response.photo_url
        },
        'registered_with': 'telegram'
    }
    await logIn(email, password, userInfo)
};
