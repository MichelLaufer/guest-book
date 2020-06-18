import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../reducers/users'


export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()
  const dispatch = useDispatch()

  const handleSignin = (event) => {
    event.preventDefault()
    dispatch(fetchUser({ email, password }))
    history.push(`/userpage`)
  }

  const reDirect = () => {
    history.push(`/register`)
  }

  return (
    <div className="field-container">
      <form>
        <h1 className="heading">Sign-in</h1>
        <label>
          Email 
          <input
            type="email"
            required
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </label>

        <label>
          Password
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
          onClick={handleSignin}
        >
          Login
        </button>
        
        <button
          className="form-button"
          type="button"
          onClick={reDirect}
        >
          Not a member?
        </button>
      </form>
    </div>
  )
}