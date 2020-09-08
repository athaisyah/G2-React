import app from "firebase/app";
import "firebase/auth";

const readConfig = (key) => {
  return process.env["REACT_APP_FIREBASE_" + key];
};

const config = {
  apiKey: readConfig("API_KEY"),
  authDomain: readConfig("AUTH_DOMAIN"),
  databaseURL: readConfig("DATABASE_URL"),
  projectID: readConfig("PROJECT_ID"),
  storageBucket: readConfig("STORAGE_BUCKET"),
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    // this.db = app.firestore()
  }

  createFirebaseUser = (obj) => {
    return this.auth.createUserWithEmailAndPassword(obj.email, obj.password);
  };

  loginFirebaseUser = (obj) => {
    return this.auth.signInWithEmailAndPassword(obj.email, obj.password);
  };

  addStudent = () => {
    return this.db.collection("allStudents");
  };
}

export default Firebase;
