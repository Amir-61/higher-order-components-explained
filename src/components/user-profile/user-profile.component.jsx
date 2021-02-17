import React from 'react';

import useFetch from '../useFetch.effect.js/useFetch.effect'

const UserProfile = ({ name, email }) => {

  const data = useFetch('https://jsonplaceholder.typicode.com/posts')

  return(<div className='container'>
    <h1>{name}</h1>
    <h2>{email}</h2>
    Posts:
    {data.map(post => (
      <div className='post' key={post.id}>
        <h1>{post.title}</h1>
        <p> {post.body} </p>
      </div>
    ))}
  </div>)
}


export default UserProfile;
