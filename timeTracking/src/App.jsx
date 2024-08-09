import React, {useState, useEffect} from 'react'
import './App.css';
import pf from './assets/images/image-jeremy.png'
import work from './assets/images/Work.svg';
import study from './assets/images/Study.svg';
import selfCare from './assets/images/SelfCare.svg';
import exercise from './assets/images/Exercise.svg';
import social from './assets/images/Social.svg';
import play from './assets/images/Play.svg';
function App() {
  const [data,setData] = useState([]);
  const [format, setFormat] = useState('daily');
  
  const formatHandle = (inputFormat)=>{
      setFormat(inputFormat);
  }
  const images = {
    Work : work,
    Study : study,
    SelfCare : selfCare,
    Exercise : exercise,
    Social : social,
    Play: play
  }
  useEffect(()=>{
    fetch('data.json')
    .then(response => response.json())
    .then(data => setData(data))
    .then(error => console.error(error))
  },[]);
  console.log(data);
  return (
    <div className='container'>
    <div className='profile'>
      <div className='profile-head'>
      <img src={pf} alt ='profile picture'></img>
      <p>Report for</p>
      <h1>Jeremy Robson</h1>
      </div>
      <ul>
        <li onClick={()=>formatHandle('daily')}>Daily</li>
        <li onClick={()=>formatHandle('weekly')}>Weekly</li>
        <li onClick={()=>formatHandle('monthly')}>Monthly</li>
      </ul>
    </div>
    {Array.isArray(data) && data.map((item,index)=>(
      <div className={item.title}>
        <img src={images[item.title]} alt={item.title} className='icons'></img>
        <div className='cards' key={index}>
        <h2>{item.title}</h2>
        <p className='hours'>{item.timeframes[format].current} Hrs</p>
        <p>Last day - {item.timeframes[format].previous}</p>
      </div>
      </div>
    ))}
    </div>
  )
}

export default App
