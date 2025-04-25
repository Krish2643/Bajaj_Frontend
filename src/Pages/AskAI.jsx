import React from 'react'
import Reports from '../Components/AskAi/Reports'
import ChatBot from '../Components/AskAi/ChatBot'
import DialogflowChat from '../Components/AskAi/DialogflowChat'

const AskAI = () => {
  return ( 
    <div style={{display:'flex', paddingRight: '3rem'}} >
    <Reports />
    {/* <DialogflowChat /> */}
    <ChatBot />
    </div>

  )
}

export default AskAI

 // "react-gauge-chart": "^0.5.1",