import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'

// const url = "http://localhost:8082/users"


export const Registration = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [registered, setRegistered] = useState(false)
  const [failure, setFailure] = useState(false)
  const history = useHistory()

  const handleSubmit = event => {
    event.preventDefault()
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        if (res.status !== 201) {
          return (
            res.json().then(json => console.log(json.message)), setFailure(true)
          )
        } else {
          setRegistered(true)
          setTimeout(reDirect, 2000)
        }
      })
      .catch(err => console.log("Error:", err))
  }
  
  const reDirect = () => {
    history.push(`/login`)
  }
  

  return (
    <div className="field-container">
      {registered && 
        <h1 className="heading" color={"#fff"}>Success! Continuing to login...</h1>
      }
      {!registered && (
        <div className="field-container">
          <form onSubmit={handleSubmit}>
            {!failure && <h1 className="heading">Create new user</h1>}
            {failure && (
              <h1 className="heading">
                User not created. Try using another name or email!
              </h1>
            )}
            <label>
              Name
              <input 
                type="text"
                required
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </label>
            <label>
              Email 
              <input 
                lowercase
                type="text"
                required
                value={email}
                onChange={event => setEmail(event.target.value.toLowerCase())}
              />
            </label>
            <label>
              Password{" "}
              {password.length < 5 && password.length !== 0 && " is too short"}
              <input 
                type="password"
                required
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
            </label>
            <button
              className="form-button"
              type="submit"
              disabled={
                password.length > 4 &&
                email
                ? false
                : true
              }
              onClick={handleSubmit}
            >
              Register
            </button>
            <button
              className="form-button"
              type="button"
              onClick={reDirect}
            >
              Already a member?
            </button>
          </form>
        </div>
      )}
    </div>
  )
}