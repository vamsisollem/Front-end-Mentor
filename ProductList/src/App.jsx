import React, {useState, useEffect} from 'react'
import './App.css'
function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
      fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error=> console.error('Error fetching data:', error));
  },[]);

  return (
    <div className='grid'>
      <h1>Desserts</h1>
      <main>
        {data.map((item) => (
           <div className='card' key={item.id}>
            <img src={item.image.desktop} alt = {item.name}></img>
            <p>{item.category}</p>
            <h4>{item.name}</h4>
            <p>${item.price}</p>
           </div>
        ))}
      </main>
      <section>
        <h2>Your Cart</h2>
      </section>
    </div>
  )
}

export default App
