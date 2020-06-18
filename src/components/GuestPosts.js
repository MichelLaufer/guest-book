import React from 'react'
import TimeStamp from 'react-timeago'
import { LikeButton } from './LikeButton'


export const GuestPosts = props => {
  const { post, likes, createdAt } = props.message

  return (
    <article className="cards">
      <p className="post">{post}</p>

      <section className="cards-bottom">
        <LikeButton 
          likes={likes}
          id={props.message._id}
          onPostLiked={props.onPostLiked}
        />
        <p className="time"><TimeStamp date={createdAt} /></p>
      </section>
    </article>
  )
}