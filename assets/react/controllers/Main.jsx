import React, { useState } from 'react'
import Table from '../components/ui/Table.jsx'
import Drawer from '../components/ui/Drawer.jsx'
import Delete from '../components/models/Delete.jsx'

const Main = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [deleteExpense, setDeleteExpense] = useState('')

  const toggleDrawer = () => {
    setOpenDrawer((prev) => !prev)
  }

  const toggleDelete = (id) => {
    setDeleteExpense(id)
  }

  return (
    <main className='app'>
      <Drawer isOpen={openDrawer} />
      {openDrawer && <div className='overlay' onClick={toggleDrawer}></div>}
      <div className='container'>
        <h1>Expenses</h1>
        <button className='btn btn-primary' onClick={toggleDrawer}>
          Add New Expense
        </button>
        <Table toggle={toggleDrawer} deleteExpense={toggleDelete} />
      </div>
      {deleteExpense && <Delete id={deleteExpense} toggle={toggleDelete} />}
    </main>
  )
}

export default Main
