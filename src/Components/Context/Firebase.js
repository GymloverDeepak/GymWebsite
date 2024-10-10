import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth ,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import {getDatabase ,ref,set} from "firebase/database"
import { useContext } from "react";

const FirebaseContext = createContext(null)

const firebaseConfig = {
    apiKey: "AIzaSyCKQjS3gCIyjG3S63YQSbMv1hSXXW-tEjc",
    authDomain: "gym-lover-1d2f3.firebaseapp.com",
    databaseURL: "https://gym-lover-1d2f3-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "gym-lover-1d2f3",
    storageBucket: "gym-lover-1d2f3.appspot.com",
    messagingSenderId: "1025159520311",
    appId: "1:1025159520311:web:75665298119d6f58eedfb2",
    measurementId: "G-F701GGLWTR",
    databaseURL:"https://gym-lover-1d2f3-default-rtdb.asia-southeast1.firebasedatabase.app/"
  };
  const firebaseApp = initializeApp(firebaseConfig);
  const db =getDatabase(firebaseApp)
  const firebaseAuth = getAuth(firebaseApp);
export const useFirebase = () =>useContext(FirebaseContext)

export const FirebaseProvider = (props)=>{
    const  userSignup =(event,email,pass)=>{
        event.preventDefault(); // Prevent the form from submitting in the default way
        createUserWithEmailAndPassword(firebaseAuth, email, pass)
            .then((value) => console.log("value", value))
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    const  userLogin =(event,email,pass)=>{
        event.preventDefault(); // Prevent the form from submitting in the default way
        signInWithEmailAndPassword(firebaseAuth, email, pass)
            .then((value) => console.log("valuetest", value))
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    const  addUsers =(key ,id,name,age)=>{
        set(ref(db, `users/${key}`), {
            id: id,
            name: name,
            age: age
        });
        console.log("addUsers",key ,id,name,age)
    } 
return(<FirebaseContext.Provider value={{userLogin,addUsers,userSignup}}>
    {props.children }
</FirebaseContext.Provider>

)
}
