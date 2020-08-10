import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBRA4utFWkCBIhMwSPvWFw_DaMP3qdfd-k",
  authDomain: "react-db-test-b1f33.firebaseapp.com",
  databaseURL: "https://react-db-test-b1f33.firebaseio.com",
  projectId: "react-db-test-b1f33",
  storageBucket: "react-db-test-b1f33.appspot.com",
  messagingSenderId: "720938368372",
  appId: "1:720938368372:web:0b9fbca0e1f9014b994021",
  measurementId: "G-DQ0KKTNYG2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
