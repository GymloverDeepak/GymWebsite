import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import { getDatabase, ref, onValue } from "firebase/database";
import * as XLSX from "xlsx"; // Import the XLSX library
import { saveAs } from "file-saver"; // Import the file-saver to trigger download

function Users() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const dbRef = ref(db, "users"); // Assuming you have a 'users' node in your Firebase
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert Firebase object data to an array
        const formattedData = Object.keys(data).map((key) => ({
          key, // This is the unique key from Firebase
          ...data[key], // Spread other properties such as id, age, name, createdAt, etc.
        }));
        setUserData(formattedData);
      }
    });
  }, []);

  const columns = [
    {
      name: 'ID',
      selector: row => row.id || "-",
      sortable: true,
    },
    {
      name: 'Name',
      selector: row => row.name || "-",
      sortable: true,
    },
    {
      name: 'Date of Birth',
      selector: row => row.dob || "-",
      sortable: true,
    },
    {
      name: 'Father Name',
      selector: row => row.fatherName || "-",
    },

    {
      name: 'Address',
      selector: row => row.address || "-",
    },
    {
      name: 'Total Fees',
      selector: row => row.totalFees || "-",
    },
    {
      name: 'Payment_Mode',
      selector: row => row.payMent_Mode || "-",
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
