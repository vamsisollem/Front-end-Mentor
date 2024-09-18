import React from 'react'

function CommentList({comments}) {
    const renderedComments = Object.values(comments).map(comment =>{
        let content;

        if(comment.status === 'approved'){
          content = comment.content;
        }
        else if(comment.status === 'Pending'){
          content = 'This is in moderation'
        }
        else if(comment.status === 'rejected'){
          content = 'This comment is rejected'
        }
        return <li key={comment.id}>{content}</li>
    })
  return (
    <ul>
        {renderedComments}
    </ul>
  )
}

export default CommentList
