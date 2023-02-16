import { Avatar } from '@mui/material'
import React from 'react'
import './Threads.css'

const Threads = () => {
  return (
    <div className='threads'>
      <Avatar />
      <div className="threads_details">
        <div className="heads">
          <h3>Thread goes here</h3>
          <p>info on threads </p>
        </div>
        <small className='threads_timestamp'>Timestamp for threads</small>
      </div>
    </div>
  )
}

export default Threads
