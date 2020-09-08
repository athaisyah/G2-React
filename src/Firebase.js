import * as firebase from "firebase";
import firestore from "firebase/firestore";

// const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: "AIzaSyCuy6zGRFaaJgrq553t74NtW7x2KMZBp5E",
  authDomain: "fulltime-react.firebaseapp.com",
  databaseURL: "https://fulltime-react.firebaseio.com",
  projectId: "fulltime-react",
  storageBucket: "fulltime-react.appspot.com",
  messagingSenderId: "34832140476",
  //   appId: "1:34832140476:web:ce4dff49a1479846e5a8b9",
};

firebase.initializeApp(config);

firebase.firestore();
// .settings(settings);

export default firebase;
