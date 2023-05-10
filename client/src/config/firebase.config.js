// // import { getApp, getApps } from "firebase";
// // import { getApp, getApps } from "firebase";
// import { getStorage } from "firebase/storage";
// import firebase from "firebase/compat/app";
// // import "firebase/firestore";

// import { initializeApp } from "firebase/app";
// // import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSEAGING_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

// const app =
//   firebase.apps.length > 0 ? firebase.app() : initializeApp(firebaseConfig);
// const storage = getStorage(app);
// // const storage = app.firestore();
// // const storage = firebase.storage();

// export { app, storage };


import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
// import firebase from "firebase/compat/app";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSEAGING_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export default db
