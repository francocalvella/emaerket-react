import firebase from '../Config/firebase'


export async function getUserById(user){
    const querySnapshot = await firebase.firestore()
    .collection('ususarios').where("userId","==", user).get()
    return querySnapshot
}

export async function authUser(email, password){
    const querySnapshot = await firebase.auth().signInWithEmailAndPassword(email, password)
    return querySnapshot
}