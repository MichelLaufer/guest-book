import React from 'react'
import { Login } from './Login'
import { Registration } from './Registration'


export const StartPage = () => {
  return (
    <div className="start-container">
      <div className="start-title">Guest Book</div>
      <Login />
      <Registration />
    </div>
  )
}