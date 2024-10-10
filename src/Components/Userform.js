import { useFirebase } from "../Components/Context/Firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function UserForm() {
    let navigate = useNavigate();
  const myFirebase = useFirebase();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("soankhan");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [payStatus, setPayStatus] = useState("");
  const [payMode, setPayMode] = useState("");
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const dbRef = ref(db, "users");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formattedData = Object.keys(data).map((key) => ({
          key,
          ...data[key],
        }));
        setUserData(formattedData);
      }
    });
  }, []);

  const handleSubmit = () => {
    const newUser = {
      id: userData.length + 1,
      name,
      address,
      payStatus,
      payMode,
      email,
      age,
    };

    // Ensure that 'name' is passed as the key to Firebase
    myFirebase.addUsers(name, newUser);
    navigate(`/members`);
  };

  return (
    <div className="container" style={{ textAlign: "center", marginTop: "50px" }}>
      <div className="row justify-content-center">
        <div className="col-md-4 col-lg-4">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Your Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="payment-status" className="form-label">Payment Status (e.g., Done/Pending)</label>
              <input
                type="text"
                className="form-control"
                id="payment-status"
                placeholder="Pending"
                required
                value={payStatus}
                onChange={(e) => setPayStatus(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="paymentmode" className="form-label">Payment Mode</label>
              <input
                type="text"
                className="form-control"
                id="paymentmode"
                placeholder="Payment mode"
                required
                value={payMode}
                onChange={(e) => setPayMode(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Address" className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                id="Address"
                placeholder="Your Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="age" className="form-label">Age</label>
              <input
                type="text"
                className="form-control"
                id="age"
                placeholder="Enter Your Age"
                required
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserForm;
