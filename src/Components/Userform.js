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
        console.log("formattedData",formattedData);
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
  const [formData, setFormData] = useState({
    id:userData.length + 1,
    name: '',
    email: '',
    dob: '',
    address: '',
    phone: '',
    fatherName: '',
    gender: '',
    payMent_Mode: '',
    totalFees:'',
    paymentStatus:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update formData
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Update total fees based on payment mode
    if (name === 'payMent_Mode') {
      let fees = '';
      switch (value) {
        case 'Monthly':
          fees = '1000';  // Example monthly fee
          break;
        case 'Quaterly':
          fees = '2700';  // Example quarterly fee
          break;
        case 'Half-Yearly':
          fees = '4800';  // Example half-yearly fee
          break;
        case 'Yearly':
          fees = '9000';  // Example yearly fee
          break;
        default:
          fees = ''; // Clear if no mode is selected
      }

      // Set totalFees in formData
      setFormData((prevData) => ({
        ...prevData,
        totalFees: fees,
      }));
    }
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted: ', formData);
    myFirebase.addUsers(formData.name, formData);
    navigate(`/members`);
    // Further processing like sending data to an API or clearing form
  };

  return (
    // <div className="container" style={{ textAlign: "center", marginTop: "50px" }}>
    //   <div className="row justify-content-center">
    //     <div className="col-md-4 col-lg-4">
    //       <form>
    //         <div className="mb-3">
    //           <label htmlFor="name" className="form-label">Your Name</label>
    //           <input
    //             type="text"
    //             className="form-control"
    //             id="name"
    //             placeholder="Your name"
    //             required
    //             value={name}
    //             onChange={(e) => setName(e.target.value)}
    //           />
    //         </div>

    //         <div className="mb-3">
    //           <label htmlFor="email" className="form-label">Email Address</label>
    //           <input
    //             type="email"
    //             id="email"
    //             className="form-control"
    //             placeholder="Your Email Address"
    //             required
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //         </div>

    //         <div className="mb-3">
    //           <label htmlFor="payment-status" className="form-label">Payment Status (e.g., Done/Pending)</label>
    //           <input
    //             type="text"
    //             className="form-control"
    //             id="payment-status"
    //             placeholder="Pending"
    //             required
    //             value={payStatus}
    //             onChange={(e) => setPayStatus(e.target.value)}
    //           />
    //         </div>

    //         <div className="mb-3">
    //           <label htmlFor="paymentmode" className="form-label">Payment Mode</label>
    //           <input
    //             type="text"
    //             className="form-control"
    //             id="paymentmode"
    //             placeholder="Payment mode"
    //             required
    //             value={payMode}
    //             onChange={(e) => setPayMode(e.target.value)}
    //           />
    //         </div>

    //         <div className="mb-3">
    //           <label htmlFor="Address" className="form-label">Address</label>
    //           <input
    //             type="text"
    //             className="form-control"
    //             id="Address"
    //             placeholder="Your Address"
    //             required
    //             value={address}
    //             onChange={(e) => setAddress(e.target.value)}
    //           />
    //         </div>

    //         <div className="mb-3">
    //           <label htmlFor="age" className="form-label">Age</label>
    //           <input
    //             type="text"
    //             className="form-control"
    //             id="age"
    //             placeholder="Enter Your Age"
    //             required
    //             value={age}
    //             onChange={(e) => setAge(e.target.value)}
    //           />
    //         </div>

    //         <button
    //           type="button"
    //           className="btn btn-primary w-100"
    //           onClick={handleSubmit}
    //         >
    //           Submit
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>

    <div className="form-container">
      <form onSubmit={handleSubmit1}>
        {/* Name Input */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Age Input */}
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        {/* Address Input */}
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone Input */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* fatherName Input */}
        <div className="form-group">
          <label htmlFor="fatherName">Father Name:</label>
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Gender Select */}
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
              <option key="gender-default" value="">Select Gender</option>
    <option key="gender-male" value="male">Male</option>
    <option key="gender-female" value="female">Female</option>
    <option key="gender-other" value="other">Other</option>
          </select>
        </div>

        {/* payMent_Mode Select */}
        <div className="form-group">
          <label htmlFor="payMent_Mode">payMent_Mode:</label>
          <select
            id="payMent_Mode"
            name="payMent_Mode"
            value={formData.payMent_Mode}
            onChange={handleChange}
            required
          >
             <option key="payment-default" value="">Select Payment Mode</option>
    <option key="payment-monthly" value="Monthly">Monthly</option>
    <option key="payment-quarterly" value="Quaterly">Quaterly</option>
    <option key="payment-half-yearly" value="Half-Yearly">Half-Yearly</option>
    <option key="payment-yearly" value="Yearly">Yearly</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="totalFees">Total Fees:</label>
          <input
            type="text"
            id="totalFees"
            name="totalFees"
            value={formData.totalFees}
            readOnly
          />
        </div>
        <div className="form-group">
          <img 
            src="img/qrcode.jpeg" // Replace with your QR code URL
            alt="QR Code"
            style={{ width: '460px', height: '350px' }}
          />
           <label style={{textAlign:"center"}}>Amount:- {formData.totalFees}</label>
        </div>
        {/* Submit Button */}
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
