import React, { useState } from 'react';
import arcade from '../assets/images/icon-arcade.svg';
import advance from '../assets/images/icon-advanced.svg';
import pro from '../assets/images/icon-pro.svg';

function Plan({ tabChange, onPlanSubmit }) {
  const [isChecked, setIsChecked] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleNext = () => {
    tabChange(2);
    onPlanSubmit(selectedPlan);
  };

  const handleBack = () => {
    tabChange(0);
  };

  const yearlyPlan = () => {
    setIsChecked(!isChecked);
  };

  const selectPlan = (planName, option) => {
    setSelectedPlan(planName);
    setHighlight(option);
  };

  return (
    <div className='container'>
      <div className='tab'>
        <div className='flex-row'>
          <div className='number'>1</div>
          <div>
            <p>STEP1</p>
            <h4>YOUR INFO</h4>
          </div>
        </div>
        <div className='flex-row'>
          <div className='number number-active'>2</div>
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
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing</p>
        <div className='plan-container'>
          <div className='options'>
            <div className={`option-container ${highlight === 0 ? 'option-highlight' : ''}`} onClick={() => selectPlan((isChecked ? 'Arcade - $90/yr': 'Arcade - $9/mon'), 0)}>
              <img src={arcade} alt="joystick emoji"></img>
              <div className='option-details'>
                <h5>Arcade</h5>
                {isChecked ? <p>$90/yr</p> : <p>$9/mon</p>}
              </div>
            </div>
            <div className={`option-container ${highlight === 1 ? 'option-highlight' : ''}`} onClick={() => selectPlan((isChecked ? 'Advanced - $120/yr': 'Advanced - $12/mon'), 1)}>
              <img src={advance} alt="controller emoji"></img>
              <div className='option-details'>
                <h5>Advanced</h5>
                {isChecked ? <p>$120/yr</p> : <p>$12/mon</p>}
              </div>
            </div>
            <div className={`option-container ${highlight === 2 ? 'option-highlight' : ''}`} onClick={() => selectPlan((isChecked ? 'Pro - $150/yr': 'Pro - $15/mon'), 2)}>
              <img src={pro} alt="console controller emoji"></img>
              <div className='option-details'>
                <h5>Pro</h5>
                {isChecked ? <p>$150/yr</p> : <p>$15/mon</p>}
              </div>
            </div>
          </div>
          <div className='toggle-container'>
            <label htmlFor='toggle'>Monthly</label>
            <input type='checkbox' id='toggle' className='checkbox' checked={isChecked} onChange={yearlyPlan}></input>
            <label htmlFor='toggle'>Yearly</label>
          </div>
        </div>
        <div>
          <button className='back' onClick={handleBack}>Go Back</button>
          <button className='next' onClick={handleNext}>Next Step</button>
        </div>
      </div>
    </div>
  );
}

export default Plan;
