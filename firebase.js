import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAvfO1VJTCzxslO5LHKKIeY5lSPPuzw9SM",
  authDomain: "whatsapp-2-ce8ba.firebaseapp.com",
  projectId: "whatsapp-2-ce8ba",
  storageBucket: "whatsapp-2-ce8ba.appspot.com",
  messagingSenderId: "103836882999",
  appId: "1:103836882999:web:bf6ae47af74d50a688c7b2"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
