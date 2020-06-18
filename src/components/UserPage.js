import React, { useEffect, useState } from 'react'
import { GuestForm } from './GuestForm'
import { GuestPosts } from './GuestPosts'
import { Logout } from './Logout'


export const UserPage = () => {
  const [messages, setMessages] = useState([])
  const [postedMessage, setPostedMessage] = useState("")
  const [loading, setLoading] = useState(true)

  
  useEffect(() => {
    fetch("http://localhost:8082/users/messages")
      .then(res => res.json())
      .then(json => {
        setMessages(json)
        setLoading(false)
      })
  }, [postedMessage])

  const onFormSubmit = post => {
    setPostedMessage(post)
  }

  const onMessageLiked = (likedMessageId) => {
    const updatedPosts = messages.map((message) => {
      if(message._id === likedMessageId) {
        message.likes +=1
      }
      return message
    })
    setMessages(updatedPosts)
  }


  return (
    <div className="main-container">
      <h1>Guest Book</h1>
      <GuestForm onFormSubmit={onFormSubmit} />

      {loading && <h4>Waiting for some exciting messages...</h4>}

      {messages.map(message => (
      <GuestPosts 
        key={message._id}
        message={message}
        likes={message.likes}
        onMessageLiked={onMessageLiked}
      />
      ))}
      <Logout />
    </div>
  )
}