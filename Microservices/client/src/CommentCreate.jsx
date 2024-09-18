import React,{useState} from 'react'
import axios from'axios';

function CommentCreate({postId}) {
    const[content, setContent] = useState('')
    const handleContent = (e)=>{
        setContent(e.target.value);
    }
    const onSubmit= async(event)=>{
        event.preventDefault();
        await axios.post(`http://posts.com/posts/${postId}/comments`,{
           content
        });
        setContent('')
    }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form-group mb-3'>
            <label>New Comment</label>
            <input className='form-control' value={content} onChange={handleContent}></input>
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default CommentCreate
