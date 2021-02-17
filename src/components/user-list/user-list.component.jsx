import React from 'react';

import useFetch from '../useFetch.effect.js/useFetch.effect'

const UserList = () => {
  const data = useFetch('https://jsonplaceholder.typicode.com/users')

  return (
    <div className='container user-list'>
      <h1> Users List </h1>
      {data.map(user => (
        <div className='post' key={user.id}>
          <h1> {user.name} </h1>
          <h2> {user.email} </h2>
        </div>
      ))}
    </div>
  )
};

export default UserList;
