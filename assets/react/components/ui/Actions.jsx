import { Edit, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import Delete from '../models/Delete'

const Actions = ({ rowData, toggle, deleteExpense }) => {
  return (
    <div className='actions-buttons'>
      <button className='btn btn-primary' onClick={toggle}>
        <Edit className='svg-icon' />
      </button>
      <button
        className='btn btn-danger'
        onClick={() => deleteExpense(rowData.id)}
      >
        <Trash2 className='svg-icon' />
      </button>
    </div>
  )
}

export default Actions
