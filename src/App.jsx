import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      {/* Side menu section */}
   <aside className=" sidemenu"  >
    <div
    className='side-menu-button' 
    >
      <span className=''> +</span>
      New chat
    </div>
   </aside>
    {/* Chatbox section */}
   <section className=' chatbox'>
    <div className="chat-log">
      <div className="chat-message">
        <div className="chat-message-center">
        <div className="avatar">
          me
        </div>
        <div className="message">
          Hello world
        </div>
        </div>
        <div className="chat-message chatgpt">
        <div className="chat-message-center">
        <div className="avatar chatgpt">
          me
        </div>
        <div className="message">
          I'm an AI
        </div>
        </div>
      </div>
      </div>
    </div>
    <div className="chat-input-holder">
      <textarea className='chat-input-textarea'rows={1} placeholder='Enter your message here'></textarea>
    </div>
   </section>
      
    </div>
  )
}

export default App
