import firebase from './firebase'

export const createUserWithEmailAndPassword = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password);
}

export const signInWithEmailAndPassword = (email, password) =>
    firebase.auth().signInWithEmailAndPassword(email, password);

export const signOut = () => firebase.auth().signOut();
