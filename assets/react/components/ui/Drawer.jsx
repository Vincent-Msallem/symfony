import React, { useState } from 'react'
// import PropTypes from 'prop-types'
// import './Drawer.css'
import axios from 'axios'

const Drawer = ({ isOpen }) => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState(0)
  const [description, setDescription] = useState('')

  // <a href="{{ path('app_expenses_new') }}">Create new</a>
  const addExpense = () => {
    const values = {
      name,
      amount,
      description,
    }
    const response = axios.post(
      'http://localhost:8000/src/Controller/ExpensesController.php',
      values
    )
    console.log(response)
  }

  return (
    <div className={`drawer ${isOpen ? 'open' : ''}`}>
      <div className='drawer-content'>
        {/* Drawer content goes here */}
        <h3>Add New expense</h3>
        <input
          placeholder='name...'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder='amount...'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <textarea
          rows={3}
          placeholder='description...'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ resize: 'none' }}
        />
        <div>
          <button
            type='submit'
            className='btn btn-primary'
            onClick={addExpense}
          >
            Save
          </button>

          <button className='btn btn-danger'>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default Drawer
