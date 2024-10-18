import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import { getDatabase, ref, onValue, update,remove,set } from "firebase/database";
import * as XLSX from "xlsx"; // Import the XLSX library
import { saveAs } from "file-saver"; // Import the file-saver to trigger download
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSave, faTimes,faBell,faTrash,faUpload } from '@fortawesome/free-solid-svg-icons'; // Added save and cancel icons
import Notification from "./Notification";
function Users() {
  const [userData, setUserData] = useState([]);
  const [editingRow, setEditingRow] = useState(null); // Track the row being edited
  const [formData, setFormData] = useState({});
  const [filteredData, setFilteredData] = useState([]);  // Form data to hold updated values
  useEffect(() => {
    const db = getDatabase();
    const dbRef = ref(db, "users"); // Assuming you have a 'users' node in your Firebase
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formattedData = Object.keys(data).map((key) => ({
          key, // This is the unique key from Firebase
          ...data[key],
        }));
        setUserData(formattedData);
        const paymentStatusEmpty = formattedData.filter(user => user.paymentStatus === "");
        setFilteredData(paymentStatusEmpty);
      }
    });
  }, []);

  // Handle input changes for the form fields
  const handleInputChange = (e, rowKey, field) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [rowKey]: { ...formData[rowKey], [field]: value },
    });
  };

  // Enable edit mode for a specific row
  const handleEditRow = (row) => {
    setEditingRow(row.key);
    setFormData({
      [row.key]: {
        id: row.id,
        name: row.name,
        dob: row.dob,
        fatherName: row.fatherName,
        address: row.address,
        totalFees: row.totalFees,
        payMent_Mode: row.payMent_Mode,
        paymentStatus: row.paymentStatus,
      },
    });
  };

  // Save changes to Firebase and exit edit mode
  const handleSaveRow = (row) => {
    const db = getDatabase();
    const dbRef = ref(db, `users/${row.key}`);

    // Update Firebase with the new data
    const updatedRow = formData[row.key];
    update(dbRef, updatedRow)
      .then(() => {
        alert( updatedRow.name + " Payment "+  updatedRow.paymentStatus +" succesfully ")
        setEditingRow(null); // Exit edit mode
      })
      .catch((error) => {
        console.error("Error updating data: ", error);
      });
  };

  // Cancel edit mode
  const handleCancelEdit = () => {
    setEditingRow(null); // Exit edit mode without saving
   
  };

  const handleDeleteRow = (row) => {
    const db = getDatabase();
    const dbRef = ref(db, `users/${row.key}`);
    remove(dbRef)
      .then(() => {
        alert("User deleted successfully.")
        console.log("User deleted successfully.");
        // Optionally update the state to remove the deleted user
        setUserData(userData.filter(user => user.key !== row.key));
      })
      
      .catch((error) => {
        alert("Error deleting user")
        console.error("Error deleting user: ", error);
      });
  };

  const columns = [
    {
      name: 'ID',
      selector: row => row.id || "-", // Make ID non-editable by showing it as static text
      sortable: true,
    },
    {
      name: 'Name',
      selector: row => 
        editingRow === row.key ? 
        (<input type="text" value={formData[row.key]?.name || ""} onChange={(e) => handleInputChange(e, row.key, 'name')} />)
        : row.name || "-",
      sortable: true,
    },
    {
      name: 'Date of Birth',
      selector: row => 
        editingRow === row.key ? 
        (<input type="date" value={formData[row.key]?.dob || ""} onChange={(e) => handleInputChange(e, row.key, 'dob')} />)
        : row.dob || "-",
      sortable: true,
    },
    {
      name: 'Father Name',
      selector: row => 
        editingRow === row.key ? 
        (<input type="text" value={formData[row.key]?.fatherName || ""} onChange={(e) => handleInputChange(e, row.key, 'fatherName')} />)
        : row.fatherName || "-",
    },
    {
      name: 'Address',
      selector: row => 
        editingRow === row.key ? 
        (<input type="text" value={formData[row.key]?.address || ""} onChange={(e) => handleInputChange(e, row.key, 'address')} />)
        : row.address || "-",
    },
    {
      name: 'Total Fees',
      selector: row => 
        editingRow === row.key ? 
        (<input type="number" value={formData[row.key]?.totalFees || ""} onChange={(e) => handleInputChange(e, row.key, 'totalFees')} />)
        : row.totalFees || "-",
    },
    {
      name: 'Payment Mode',
      selector: row => 
        editingRow === row.key ? 
        (<input type="text" value={formData[row.key]?.payMent_Mode || ""} onChange={(e) => handleInputChange(e, row.key, 'payMent_Mode')} />)
        : row.payMent_Mode || "-",
    },
    {
      name: 'Payment Status',
      cell: (row) => 
        editingRow === row.key ? (
          <select
            value={formData[row.key]?.paymentStatus || ""}
            onChange={(e) => handleInputChange(e, row.key, 'paymentStatus')}
          >
            <option value="Pending">Pending</option>
            <option value="Recieved">Recieved</option>
          </select>
        ) : row.paymentStatus || "-",
      },{
        name: 'Image',
        cell: row => (
          <a href={row.imageUrl} download>
            <img
              src={row.imageUrl}
              alt={row.name}
              key={row.name}
              style={{ width: '100px', height: '100px' }}
            />
          </a>
        )
      },
    {
      name: 'Actions',
      cell: (row) => editingRow === row.key ? (
        <>
          <button onClick={() => handleSaveRow(row)} style={{ background: "transparent", border: "none", cursor: "pointer", color: "green" }}>
            <FontAwesomeIcon icon={faSave} />
          </button>
          <button onClick={handleCancelEdit} style={{ background: "transparent", border: "none", cursor: "pointer", color: "red" }}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </>
      ) : (
        <>
          <button onClick={() => handleEditRow(row)} style={{ background: "transparent", border: "none", cursor: "pointer", color: "#007bff" }}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button onClick={() => handleDeleteRow(row)} style={{ background: "transparent", border: "none", cursor: "pointer", color: "red" }}>
            <FontAwesomeIcon icon={faTrash} /> {/* Delete icon */}
          </button>
        </>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  // Function to download data as Excel
  const truncateText = (text, maxLength = 32766) => {
    return text.length > maxLength ? text.slice(0, maxLength) : text;
  };
  
  const downloadExcel = () => {
    const truncatedUserData = userData.map(user => ({
      ...user,
      address: truncateText(user.address, 1000), // Truncate long addresses to 1000 characters
      name: truncateText(user.name, 255),
      imageUrl: truncateText(user.imageUrl, 20), // Truncate name if too long
      // Add similar truncations for other fields if needed
    }));
  
    const worksheet = XLSX.utils.json_to_sheet(truncatedUserData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    saveAs(blob, "user_data.xlsx");
  };
  
  const importExcel = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });

        // Assuming the data is on the first sheet
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        // Save data to Firebase
        const db = getDatabase();
        jsonData.forEach((user, index) => {
          const userKey = `user_${Date.now()}_${index}`; // Generate unique key
          const dbRef = ref(db, `users/${userKey}`);
          set(dbRef, user)
            .then(() => console.log("User imported successfully"))
            .catch((error) => console.error("Error importing user:", error));
        });
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const [notification, setNotification] = useState({ message: "", type: "success" });
   const [hide,setHide]= useState(false)
  const showNotification = (message, type) => {
    setNotification({ message, type });
    setHide(!hide)
  };
  
  return (
    <div>
     <div className="App" style={{textAlign:"right"}}>
      <button onClick={() => showNotification( "Success! Data saved.", "success")}>
        {filteredData.length} Notification  &nbsp;&nbsp;<FontAwesomeIcon icon={faBell} />
      </button>
{hide ?  <Notification
        message={filteredData.length}
        type={notification.type}
        duration={1000} // Notification will close automatically after 3 seconds
        onClose={() => setNotification({ message: "Thankyou !", type: "success" })}
      />:""}
     
    </div>
      <DataTable
        title="User Data"
        columns={columns}
        data={userData}
        pagination
        highlightOnHover
        striped
      />
      <button className="btn btn-primary" onClick={downloadExcel}>Download Excel</button>
      <label htmlFor="importExcel" className="btn btn-secondary">
          <FontAwesomeIcon icon={faUpload} /> Import Excel
        </label>
        <input
          id="importExcel"
          type="file"
          accept=".xlsx, .xls"
          onChange={importExcel}
          style={{ display: "none" }} // Hide the input
        />
    </div>
  );
}

export default Users;


