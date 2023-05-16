import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import Actions from './Actions'

const Table = ({ toggle, deleteExpense }) => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'amount', headerName: 'Amount', width: 130 },
    { field: 'description', headerName: 'Description', width: 300 },
    { field: 'createdAt', headerName: 'Created At', width: 180 },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      filterable: false,
      width: 180,
      renderCell: (params) => (
        <Actions
          rowData={params.row}
          toggle={toggle}
          deleteExpense={deleteExpense}
        />
      ),
    },
  ]

  const rows = [
    {
      id: 1,
      title: 'Title 1',
      amount: 100,
      description: 'Description 1',
      createdAt: '2023-05-16 10:00:00',
    },
    {
      id: 2,
      title: 'Title 2',
      amount: 200,
      description: 'Description 2',
      createdAt: '2023-05-16 11:00:00',
    },
    // Add more rows as needed
  ]

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pagination
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        disableSelectionOnClick
      />
    </div>
  )
}

export default Table
