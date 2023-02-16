import React from 'react'
import './Sidebar.css'
import { FaBars } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar_menu">
       <FaBars />
      </div>
      <div className="sidebar_all">
        <p>All</p>
      </div>
      <div className="sidebar_personal">
        <p>Personal</p>
      </div>
      <div className="sidebar_uread">
      <p>Unread</p>
      </div>
      <div className="sidebar_edit">
        <p>Edit</p>
      </div>
    </div>
  )
}

export default Sidebar
