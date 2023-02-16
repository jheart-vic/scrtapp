import React from 'react'
import Sidebar from './Sidebar'
import SidebarForThreads from './SidebarForThreads'
import Chats from './Chats'
import './Telegram.css'

const Telegram = () => {
  return (
    <div className='telegram'>
      <div className="sidebar">
       <Sidebar />
      </div>
      <div className="telegram_threads">
       <SidebarForThreads />
      </div>
      <div className="main_chats">
       <Chats />
      </div>
    </div>
  )
}

export default Telegram


