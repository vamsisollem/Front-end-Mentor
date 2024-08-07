import React, { useState, useEffect } from 'react';
import './App.css';
import cartIcon from './assets/Images/icon-add-to-cart.svg';
import cartEmpty from './assets/Images/illustration-empty-cart.svg';
import minus from './assets/Images/icon-decrement-quantity.svg';
import plus from './assets/Images/icon-increment-quantity.svg';
import confirmTick from './assets/Images/icon-order-confirmed.svg';

function App() {
  const [data, setData] = useState([]);
  const [buttonStates, setButtonStates] = useState({});
  const [count, setCount] = useState({});
  const [items, setItems] = useState([]);
  const [empty, setEmpty] = useState('empty');
  const [confirm, setConfirm] = useState('');
  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  const handleButtonClick = (index) => {
    setButtonStates(prevState => ({
      ...prevState, 
      [index]: prevState[index] === 'AddButton' ? 'IncrementButton' : 'AddButton'
    }))
  };
  const countHandlePlus = (item, index) => {
    
    setCount(prevCount => {
      const newCount = {
        ...prevCount,
        [index]: (prevCount[index] || 0) + 1
      }
      setEmpty('notEmpty');
      setItems(prevItems => {
        const updatedItems = [...prevItems];
        const itemIndex = updatedItems.findIndex(i => i.index === index);
  
        if (itemIndex === -1) {
          updatedItems.push({ ...item, index, quantity: newCount[index] });
        } else {
          updatedItems[itemIndex].quantity = newCount[index];
        }
  
        return updatedItems;
      });
  
      return newCount;
    });
  };
  
  const countHandleMinus = (item,index) => {
    setCount(prevCount => ({
        ...prevCount,
      [index]: (Math.max(prevCount[index],1))-1 ,
    }));
   
    setItems(prevItems => {
      return prevItems
        .map(item => item.index === index ? { ...item, quantity: (Math.max(item.quantity, 1))-1 } : item)
        .filter(item => item.quantity > 0);
    });
  };
  
  
  const totalItemCount = Object.values(count).reduce((acc, curr) => acc + curr, 0);
  const totalItemCost = 
   Object.values(items).reduce((total, item) => {
      return total + (item.quantity * item.price);
    }, 0);
 
useEffect(()=>{
if(totalItemCount === 0){
  setEmpty('empty')
}
else{
  setEmpty('notEmpty')
}
},[totalItemCount])

const handleOrder = ()=>{
  setConfirm('confirm')
}
const handleReload = ()=>{
  window.location.reload();
}
  return (
    <div className='grid'>
      <main>
        <h1>Desserts</h1>
        <div className='desserts'>
          {data.map((item,index) => {
            const buttonClass = buttonStates[index] || 'AddButton' ;
            const itemCount = count[index] || 0;
            return(
              <div className='card' key={index}>
              <div className='image-container'>
                <img src={item.image.desktop} alt={item.name} />
                {buttonClass === 'AddButton' && (
                  <div className='addButton' onClick={() => handleButtonClick(index)}>
                    <img src={cartIcon} alt='cart icon' />
                    <p>Add to cart</p>
                  </div>
                )}
                {buttonClass === 'IncrementButton' && (
                  <div className='incrementButton'>
                    <img
                      src={minus}
                      alt='minus'
                      className='minus'
                      onClick={()=>{countHandleMinus(item,index)}}
                    />
                    <span>{itemCount}</span>
                    <img
                      src={plus}
                      alt='plus'
                      className='plus'
                      onClick={()=>{countHandlePlus(item,index)}}
                    />
                  </div>
                )}
              </div>
              <p className='category'>{item.category}</p>
              <h4>{item.name}</h4>
              <p className='price'>${item.price}</p>
            </div>
            )
           
})}
        </div>
      </main>
      <section className='cart'>
        <h2 className='cart-heading'>Your Cart ({totalItemCount})</h2>
        {
          empty === 'empty' && 
          <div className='cart-body'>
              <img src={cartEmpty} alt="Empty cart"></img>
              <p>Your added items will appear here</p>
          </div>
        }
        {
          empty === 'notEmpty' && 
          <div className='cart-items'>
          {items.map((item,index) => {
            return(<div className='item' key={index}>
              <h4>{item.name}</h4>
              <ul>
                <li>{item.quantity}X</li>
                <li>${item.price.toFixed(2)}</li>
                <li>${((item.quantity)*(item.price)).toFixed(2)}</li>
              </ul>
            </div>)
          })}
          <div className='order-container'>
            <ul>
              <li className='orderTotal'>Order Total</li>
              <li className='totalPrice'>${totalItemCost.toFixed(2)}</li>
            </ul>
            <button className='confirm-button' onClick={()=> handleOrder()}>Confirm Order</button>
          </div>
        </div>
        }
      </section>
      {confirm === 'confirm' && <div className='order-confirm-container'>
        <img src={confirmTick} alt='success icon' className='success-icon'></img>
        <div className='order-confirm-head'>
        <h1>Order Confirmed</h1>
        <p>We hope you enjoy your foood</p>
        </div>
        <div className='orderedItems'>
          {items.map((item,index)=>{
             return( <div key={index} className='orderItem'>
              <img src={item.image.thumbnail} alt = {item.name}></img>
                <div className='orderedDetails'>
                  <h4>{item.name}</h4>
                  <ul>
                    <li className='red'>{item.quantity}X</li>
                    <li>${item.price.toFixed(2)}</li>
                  </ul>
                </div>
                <div className='itemPrice'>${((item.quantity)*(item.price)).toFixed(2)}</div>
              </div>)
            })
          }
           <ul className='finalOrder'>
                    <li className='orderName'>Order Total</li>
                    <li className='orderPrice'>${totalItemCost}</li>
                  </ul>
          <button className='confirm-button' onClick={()=> handleReload()}>Start new Order</button>
        </div>
      </div>}
    </div>
  );
}

export default App;