import firebase from './firebase'

export const logIn = async(email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() =>{
        console.log('user created!')
    }).catch((error) => {
        if(error.code === 'auth/email-already-in-use'){
            firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
                console.log('user logged in!')
            })
        }
    })
}

export const getCurrentUser = () => {
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
