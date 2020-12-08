import firebase from './firebase'

export const logIn = (email, password) => {
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
    return rebase.auth().currentUser
};

export const signOut = () => {
    firebase.auth().signOut();
}

export const handleTelegramResponse = (response) => {
    var email = response.id + '@mavka.org'
    var password = response.id
    password = password.toString()
    logIn(email, password)
};
