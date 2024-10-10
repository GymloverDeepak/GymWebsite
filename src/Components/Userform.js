import { useFirebase } from "../Components/Context/Firebase";
import Login from './Login';
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import Users from "./Users";

function UserForm() {  // Renamed to UserForm (uppercase U)
    const myFirebase = useFirebase();
    
    const [id, setId] = useState(5);
    const [name, setName] = useState("soankhan");
    const [age, setAge] = useState(30);
    const [userData, setUserData] = useState();
      useEffect(() => {
        const db = getDatabase();
        const dbRef = ref(db, 'users'); // Assuming you have a 'users' node in your Firebase
        onValue(dbRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            // Convert Firebase object data to an array
            const formattedData = Object.keys(data).map(key => ({
              key, // This is the unique key from Firebase
              ...data[key], // Spread other properties such as id, age, name, createdAt, etc.
            }));
            setUserData(formattedData);
          }
        });
      }, []);
    return (
        <div>
            userForm
            <button 
                className="btn btn-primary" // Fixed typo "btn-primery" to "btn-primary"
                onClick={() => myFirebase.addUsers("sona", id, name, age)}
            >
                Submit
            </button> 

            <div>
            {userData ? (
                <pre>{JSON.stringify(userData, null, 2)}</pre>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
        <Users userData={userData} />
            <Login />
        </div>
    );
}

export default UserForm;
