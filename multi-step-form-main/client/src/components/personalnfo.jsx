import React from 'react'
import {useState} from 'react';

function Personalnfo({tabChange}) {
    function handleNext(){
        tabChange(1);
    }
    const [active, setActive] = useState(0);
    function activeTab(){
        
    }
  return (
    <div className='container'>
        <div className='tab'>
            <div className='flex-row'>
                <div className='number number-active'>1</div>
                <div>
                    <p>STEP1</p>
                    <h4>YOUR INFO</h4> 
                </div>
            </div>
            <div className='flex-row'>
                <div className='number'>2</div>
                <div>
                    <p>STEP2</p>
                    <h4>SELECT PLAN</h4> 
                </div>
            </div>
            <div className='flex-row'>
                <div className='number'>3</div>
                <div>
                    <p>STEP3</p>
                    <h4>ADD - ONS</h4> 
                </div>
            </div>
            <div className='flex-row'>
                <div className='number'>4</div>
                <div>
                    <p>STEP4</p>
                    <h4>SUMMARY</h4> 
                </div>
            </div>
        </div>
        <div className='content'>
        <h1>Personal Info</h1>
        <p>Please provide your name, email address and phone number</p>
        <form>
            <label>Name</label>
            <input type="text" placeholder='e.g. Vamsi Sollem'></input>
            <label>Email address</label>
            <input type="email" placeholder='e.g. vamsisollem@gmail.com '></input>
            <label>Phone number</label>
            <input type="number" placeholder='e.g. (123)-456-7890'></input>
        </form>
        <button className='next' onClick={handleNext}>Next Step</button>
        </div>
    </div>
  )
}

export default Personalnfo;
