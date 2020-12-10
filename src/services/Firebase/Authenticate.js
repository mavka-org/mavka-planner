import {auth} from './firebase'

export const logIn = async(email, password) => {
    await auth.createUserWithEmailAndPassword(email, password).then(() =>{
        console.log('user created!')
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
    await logIn(email, password)
};
