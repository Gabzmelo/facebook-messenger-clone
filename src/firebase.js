import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBluvK54xMbD0MNhyzX2rbMeWFhVWfpIz8",
        authDomain: "messenger-facebook-clone-60afc.firebaseapp.com",
        projectId: "messenger-facebook-clone-60afc",
        storageBucket: "messenger-facebook-clone-60afc.appspot.com",
        messagingSenderId: "9446568363",
        appId: "1:9446568363:web:b2b73a4a3d71d6aa1822ee"
});

const db = firebaseApp.firestore();

export default db;
