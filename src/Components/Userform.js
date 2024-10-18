import { useFirebase } from "../Components/Context/Firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserForm() {
  const myFirebase = useFirebase();
  const [userData, setUserData] = useState([]);
let navigate = useNavigate()
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
        console.log("formattedData", formattedData);
      }
    });
  }, []);

  const [formData, setFormData] = useState({
    id: userData.length + 1,
    name: '',
    email: '',
    dob: '',
    address: '',
    phone: '',
    fatherName: '',
    gender: '',
    payMent_Mode: '',
    totalFees: '',
    paymentStatus: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    // Update formData
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));

    // Update total fees based on payment mode
    if (name === 'payMent_Mode') {
      let fees = '';
      switch (value) {
        case 'Monthly':
          fees = '1000'; // Example monthly fee
          break;
        case 'Quarterly':
          fees = '2700'; // Example quarterly fee
          break;
        case 'Half-Yearly':
          fees = '4800'; // Example half-yearly fee
          break;
        case 'Yearly':
          fees = '9000'; // Example yearly fee
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSubmit = { ...formData };

    // If there's an image, convert it to a base64 string
    if (formData.image) {
      const reader = new FileReader();
      reader.readAsDataURL(formData.image);
      reader.onloadend = () => {
        dataToSubmit.imageUrl = reader.result; // Use 'imageUrl' as the property name

        console.log('Form Data Submitted: ', dataToSubmit);
        myFirebase.addUsers(dataToSubmit.name, dataToSubmit, userData);
        navigate(`/`);
        clearForm();
      };
      // Return early to prevent submission before image is loaded
      return;
    }

    // If no image, submit without the image property
    console.log('Form Data Submitted: ', dataToSubmit);
    delete dataToSubmit.image; // Remove the image property if no image was uploaded
    myFirebase.addUsers(dataToSubmit.name, dataToSubmit, userData);
    clearForm();
  };

  const clearForm = () => {
    setFormData({
      id: userData.length + 1,
      name: '',
      email: '',
      dob: '',
      address: '',
      phone: '',
      fatherName: '',
      gender: '',
      payMent_Mode: '',
      totalFees: '',
      paymentStatus: '',
      image: null,
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
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

        {/* Father Name Input */}
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

        {/* Payment Mode Select */}
        <div className="form-group">
          <label htmlFor="payMent_Mode">Payment Mode:</label>
          <select
            id="payMent_Mode"
            name="payMent_Mode"
            value={formData.payMent_Mode}
            onChange={handleChange}
            required
          >
            <option key="payment-default" value="">Select Payment Mode</option>
            <option key="payment-monthly" value="Monthly">Monthly</option>
            <option key="payment-quarterly" value="Quarterly">Quarterly</option>
            <option key="payment-half-yearly" value="Half-Yearly">Half-Yearly</option>
            <option key="payment-yearly" value="Yearly">Yearly</option>
          </select>
        </div>

        {/* Total Fees */}
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

        {/* QR Code Image */}
        <div className="form-group">
          <img
            src="img/qrcode.jpeg" // Replace with your QR code URL
            alt="QR Code"
            style={{ width: '460px', height: '350px' }}
          />
          <label style={{ textAlign: "center" }}>Amount: {formData.totalFees}</label>
        </div>

        {/* Image Input */}
        <div className="form-group">
          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*" // Accept only image files
            onChange={handleChange}
          />
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
