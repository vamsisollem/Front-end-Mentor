import React,{useState} from 'react'
import axios from 'axios';
function PostCreate() {
    const[title, setTitle] = useState('')
    const handleTitle = (e)=>{
        setTitle(e.target.value);
    }
    const onSubmit= async(event)=>{
        event.preventDefault();
        await axios.post('http://posts.com/posts/create',{
            title,
        });
        setTitle('');
    }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form-group mb-3'>
            <label>Title</label>
            <input className='form-control' value={title} onChange={handleTitle}></input>
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default PostCreate
