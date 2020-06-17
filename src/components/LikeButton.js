import React, { useState } from 'react'


export const LikeButton = (props) => {
  const [clicks, setClicks] = useState((props.likes))

  if(!localStorage[props.id]) {
    localStorage.setItem(props.id, 0)
  }

  const handleClick = () => {
    fetch(`http://localhost:8082/${props.id}/like`, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => {
        props.onPostLiked(props.id)
        localStorage[props.id] = Number(localStorage[props.id]) + 1
        setClicks(clicks + 1)
      })
  }

  return (
    <section>
      <button
        className="like-button"
        type="submit"
        onClick={handleClick}
      >
      </button> {clicks} (you clicked x {localStorage[props.id]})
    </section>
  )

}