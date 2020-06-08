import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDXOU5IDG9j_cvnWDXSAJJ48XkJW5VoIEw",
    authDomain: "statkraft-c2f92.firebaseapp.com",
    databaseURL: "https://statkraft-c2f92.firebaseio.com",
    projectId: "statkraft-c2f92",
    storageBucket: "statkraft-c2f92.appspot.com",
    messagingSenderId: "654558838101",
    appId: "1:654558838101:web:5bfd27b669a220cadd43dc"
};


firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();
