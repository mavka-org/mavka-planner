import firebase from './firebase'

export const logIn = async(email, password) => {
    // await firebase.auth().createUserWithEmailAndPassword(email, password).then(() =>{
    //     console.log('user created!')
    // }).catch((error) => {
    //     if(error.code === 'auth/email-already-in-use'){
    //         firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    //             console.log('user logged in!')
    //         })
    //     }
    // })
    await firebase.auth().signInWithEmailAndPassword(email, password)
}

export const getCurrentUser = () => {
    console.log(firebase.auth().currentUser)
    return firebase.auth().currentUser
};

export const signOut = async() => {
    await firebase.auth().signOut();
}

export const handleTelegramResponse = async(response) => {
    var email = response.id + '@mavka.org'
    var password = response.id
    password = password.toString()
    await logIn(email, password)
};
