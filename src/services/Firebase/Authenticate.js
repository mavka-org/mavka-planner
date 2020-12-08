import firebase from './firebase'

export const createUserWithEmailAndPassword = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password);
}

export const signInWithEmailAndPassword = (email, password) =>
    firebase.auth().signInWithEmailAndPassword(email, password);

export const signOut = () => firebase.auth().signOut();

export const handleTelegramResponse = (response) => {
    var email = response.id + '@mavka.org'
    var password = response.id
    password = password.toString()
    createUserWithEmailAndPassword(email, password)
};
