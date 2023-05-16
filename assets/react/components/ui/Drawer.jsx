import React from 'react'
// import PropTypes from 'prop-types'
// import './Drawer.css'

const Drawer = ({ isOpen }) => {
  return (
    <div className={`drawer ${isOpen ? 'open' : ''}`}>
      <div className='drawer-content'>
        {/* Drawer content goes here */}
        <h1>Drawer Content</h1>
        <p>This is the content of the drawer.</p>
      </div>
    </div>
  )
}

export default Drawer
