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
            })
        })
    }).catch((error) => {
        if(error.code === 'auth/email-already-in-use'){
            auth.signInWithEmailAndPassword(email, password).then(() => {
                console.log('user logged in!')
            })
        }
    })
}


export const signOut = async() => {
    await auth.signOut();
}

export const handleTelegramResponse = async(response) => {
    var email = response.id + '@mavka.org'
    var password = response.id
    password = password.toString()
    var userInfo = {
        id: response.id,
        first_name: response.first_name,
        last_name: response.last_name,
        username: response.username,
        photo_url: response.photo_url
    }
    await logIn(email, password, userInfo)
};
