import React, {useContext} from 'react'
import {auth} from './firebase'
import { setUserInfo } from './../API/httpRequests'



export const logIn = async(email, password, userInfo) => {

    console.log(userInfo)
    await auth.createUserWithEmailAndPassword(email, password).then((authUser) =>{
        console.log('user created!')
        console.log(authUser)

        authUser.user.getIdToken().then((userToken) => {
            console.log(userToken)

            setUserInfo(userToken, userInfo).then((res) => {
                console.log(res)
                window.gtag('event', 'authenticate_action', {
                    'action' : 'signup',
                    'method': "telegram"
                })
            })

        })
    }).catch((error) => {
        if(error.code === 'auth/email-already-in-use'){

            auth.signInWithEmailAndPassword(email, password).then((loggedUser) => {
                console.log('user logged in!')
                window.gtag('event', 'authenticate_action', {
                    'action' : 'login',
                    'method': "telegram"
                })
            })

        }
    })
}


export const signOut = async() => {
    await auth.signOut().then( () => {
        window.gtag('event', 'authenticate_action', {
            'action' : 'logout',
        })
    });
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
