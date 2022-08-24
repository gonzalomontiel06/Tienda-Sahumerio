import firebase from 'firebase/app'
import 'firebase/firestore'

// CONFIGURACION DE FIREBASE

const firebaseConfig = {
    apiKey: 'AIzaSyDDb8BDmmln7-alUEbSeqj2YE87tbAXPqU',
    authDomain: 'loco-del-sahumerio.firebaseapp.com',
    projectId: 'loco-del-sahumerio',
    storageBucket: 'loco-del-sahumerio.appspot.com',
    messagingSenderId: '285110095213',
    appId: '1:285110095213:web:9237b8a6849a462b3d1e64'
};

const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app)
}

export const getAuth = () => {
    return firebase.auth(app)
}


// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
// };