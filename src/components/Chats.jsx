import React, { useState } from 'react'
import { Avatar, IconButton } from '@mui/material'
import './Chats.css'
import { AttachFile, SendRounded } from '@mui/icons-material';

const Chats = () => {
  const [message, setMessage] = useState('');
  const sendMessage = (e) => {
    e.preventDefault();
    console.log(message)
    setMessage('')
  }
  console.log(message)
  return (
    <div className='chats'>
      <div className="chats_header">
        <div className="chats_header_info">
          <Avatar />
          <div className="chats_header_info_content">
            <h4>ChatsName</h4>
            <h5>last seen</h5>
          </div>
        </div>
      </div>
      <div className="chats_body">
        <p>The main chat is here</p>
      </div>
      <div className="chats_message_area">
        <form action="">
          <IconButton>
           <AttachFile className='attach'></AttachFile>
          </IconButton>
        <input type="text" placeholder='write' value={message} onChange={(e) => setMessage(e.target.value)}/>
        <IconButton onClick={sendMessage}>
         <SendRounded >send</SendRounded>
        </IconButton>
        </form>
      </div>
    </div>
  )
}

export default Chats
