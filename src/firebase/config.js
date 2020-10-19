import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB8kpQVe1P8sPJxfCDEgh0jZ0ytVYJugPU",
    authDomain: "gram-98792.firebaseapp.com",
    databaseURL: "https://gram-98792.firebaseio.com",
    projectId: "gram-98792",
    storageBucket: "gram-98792.appspot.com",
    messagingSenderId: "671724875372",
    appId: "1:671724875372:web:5a6a3f70c23dd9e624b249"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp



export { projectFirestore, projectStorage, timestamp }