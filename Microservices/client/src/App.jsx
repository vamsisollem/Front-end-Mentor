import React from 'react'
import PostCreate from './PostCreate'
import PostList from './PostList'
function app() {
  return (
    <div className='container'>
      <h1>Create post</h1>
      <PostCreate />
      <hr />
      <h1>Post List</h1>
      <PostList />
    </div>
  )
}

export default app
