import React, { useState } from 'react'


export const GuestForm = props => {
  const [message, setMessage] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    fetch("http://localhost:8082", {
      method: 'POST',
      body: JSON.stringify({message}),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => {
        setMessage("")
        props.onFormSubmit(message)
      })
      .catch(err => console.log("error:", err))
  }


  return (
    <div className="guestform-card">
    <form>
      <h3 className="question">Please write a message</h3>

      <label>
      <textarea
        rows="3"
        minLength="5"
        maxLength="140"
        value={message}
        onChange={event => setMessage(event.target.value)}
      ></textarea>
      </label>

      <p className={((message.length < 5 || message.length > 140) ? "invalid-length" : "valid-length")}>
        {message.length} / 140
      </p>

      <button
        className="send-form"
        type="submit"
        onClick={handleSubmit}
        disabled={message.length < 5 || message.length > 140 ? true : false}
      >
        Send message
      </button>
    </form>
    </div>
  )
}