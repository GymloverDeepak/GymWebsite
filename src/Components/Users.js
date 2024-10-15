import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import { getDatabase, ref, onValue, update } from "firebase/database";
import * as XLSX from "xlsx"; // Import the XLSX library
import { saveAs } from "file-saver"; // Import the file-saver to trigger download
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSave, faTimes } from '@fortawesome/free-solid-svg-icons'; // Added save and cancel icons

function Users() {
  const [userData, setUserData] = useState([]);
  const [editingRow, setEditingRow] = useState(null); // Track the row being edited
  const [formData, setFormData] = useState({}); // Form data to hold updated values

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
        console.log("Data updated successfully.");
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
            <option value="Done">Done</option>
          </select>
        ) : row.paymentStatus || "-",
    },
    {
      name: 'Actions',
      cell: (row) => 
        editingRow === row.key ? (
          <>
            <button onClick={() => handleSaveRow(row)} style={{ background: "transparent", border: "none", cursor: "pointer", color: "green" }}>
              <FontAwesomeIcon icon={faSave} /> {/* Save icon */}
            </button>
            <button onClick={handleCancelEdit} style={{ background: "transparent", border: "none", cursor: "pointer", color: "red" }}>
              <FontAwesomeIcon icon={faTimes} /> {/* Cancel icon */}
            </button>
          </>
        ) : (
          <button onClick={() => handleEditRow(row)} style={{ background: "transparent", border: "none", cursor: "pointer", color: "#007bff" }}>
            <FontAwesomeIcon icon={faEdit} /> {/* Edit icon */}
          </button>
        ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  // Function to download data as Excel
  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(userData); // Convert JSON to worksheet
    const workbook = XLSX.utils.book_new(); // Create a new workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users"); // Add the worksheet to the workbook
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" }); // Generate Excel file in memory
    const blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    saveAs(blob, "user_data.xlsx"); // Trigger download using file-saver
  };

  return (
    <div>
      <DataTable
        title="User Data"
        columns={columns}
        data={userData}
        pagination
        highlightOnHover
        striped
      />
      <button className="btn btn-primary" onClick={downloadExcel}>Download Excel</button>
    </div>
  );
}

export default Users;
