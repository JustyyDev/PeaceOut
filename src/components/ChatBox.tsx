import React, { useEffect, useRef, useState } from 'react'
import { chatMessages } from '../data/fakeChat'

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([])
  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let idx = 0
    const interval = setInterval(() => {
      setMessages(msgs => [...msgs, chatMessages[idx]])
      idx++
      if (idx >= chatMessages.length) clearInterval(interval)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="chatbox" ref={chatRef}>
      {messages.map((msg, i) => (
        <div key={i} className="chat-message">{msg}</div>
      ))}
    </div>
  )
}

export default ChatBox