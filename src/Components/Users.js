import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import { getDatabase, ref, onValue } from "firebase/database";
function Users() {
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
    const [userData, setUserData] = useState();
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
          name: 'Age',
          selector: row => row.age || "-",
          sortable: true,
        },
        {
          name: 'Email',
          selector: row => row.email || "-",
        },
        {
            name: 'Address',
            selector: row => row.address || "-",
          },
          {
            name: 'Payment_status',
            selector: row => row.payStatus || "-",
          },
          {
            name: 'Payment_Mode',
            selector: row => row.payMode || "-",
          },
      ];
      
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
    </div>
  )
}

export default Users