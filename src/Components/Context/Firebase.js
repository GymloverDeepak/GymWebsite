import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyCKQjS3gCIyjG3S63YQSbMv1hSXXW-tEjc",
  authDomain: "gym-lover-1d2f3.firebaseapp.com",
  databaseURL:
    "https://gym-lover-1d2f3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gym-lover-1d2f3",
  storageBucket: "gym-lover-1d2f3.appspot.com",
  messagingSenderId: "1025159520311",
  appId: "1:1025159520311:web:75665298119d6f58eedfb2",
  measurementId: "G-F701GGLWTR",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);
const firebaseAuth = getAuth(firebaseApp);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const userSignup = (event, email, pass) => {
    event.preventDefault(); // Prevent the form from submitting in the default way
    createUserWithEmailAndPassword(firebaseAuth, email, pass)
      .then((value) => console.log("value", value))
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const userLogin = (event, email, pass) => {
    event.preventDefault(); // Prevent the form from submitting in the default way
    signInWithEmailAndPassword(firebaseAuth, email, pass)
      .then((value) => console.log("valuetest", value))
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const addUsers = (key, dataToSubmit, userData) => {
    set(ref(db, `users/${key}`), {
      name: dataToSubmit.name,
      address: dataToSubmit.address,
      totalFees: dataToSubmit.totalFees,
      payMent_Mode: dataToSubmit.payMent_Mode,
      email: dataToSubmit.email,
      dob: dataToSubmit.dob,
      id: userData.length + 1,
      fatherName: dataToSubmit.fatherName,
      gender: dataToSubmit.gender,
      phone: dataToSubmit.phone,
      paymentStatus: dataToSubmit.paymentStatus,
      imageUrl: dataToSubmit.imageUrl || null, // Set to null if undefined
    })
      .then(() => alert("Wait for Approval!"))
      .catch((error) => {
        console.error("Error writing new user to Firebase Database", error);
      });
  };

  return (
    <FirebaseContext.Provider value={{ userLogin, addUsers, userSignup }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
