import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

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
    app.initializeApp(config); // Initialize firebase config
    this.auth = app.auth(); // Initialize firebase auth

    // Firestore
    this.fieldValue = app.firestore.FieldValue;
    this.db = app.firestore();
  }

  // Create staff with email and password
  createFirebaseUser = (staff) => {
    return this.auth.createUserWithEmailAndPassword(
      staff.email,
      staff.password
    );
  };

  // Staff Login with email and password
  loginFirebaseUser = (staff) => {
    return this.auth.signInWithEmailAndPassword(staff.email, staff.password);
  };

  // Logout staff
  logoutFirebaseUser = () => this.auth.signOut();

  // Staff cloud firestore
  usersDb = () => this.db.collection("staff");

  // Staff cloud firestore
  customersDb = () => this.db.collection("customers");
}

export default Firebase;
