import React from 'react'
import DataTable from 'react-data-table-component';
function Users({userData}) {
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
      ];
      
  return (
    <div>
      <h3>DataTable Example</h3>
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