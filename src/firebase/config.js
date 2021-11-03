import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDb8BDmmln7-alUEbSeqj2YE87tbAXPqU",
    authDomain: "loco-del-sahumerio.firebaseapp.com",
    projectId: "loco-del-sahumerio",
    storageBucket: "loco-del-sahumerio.appspot.com",
    messagingSenderId: "285110095213",
    appId: "1:285110095213:web:9237b8a6849a462b3d1e64"
};

const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app)
}

