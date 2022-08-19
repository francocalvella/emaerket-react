import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import {getStorage} from 'firebase/storage' 

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "falsemarketcalvella.firebaseapp.com",
    projectId: "falsemarketcalvella",
    storageBucket: "falsemarketcalvella.appspot.com",
    messagingSenderId: "5372851080",
    appId: "1:5372851080:web:6947341971fa4a9ecb803d"
  };

  const app = firebase.initializeApp(firebaseConfig);
  export const storage = getStorage(app)


  export default firebase;