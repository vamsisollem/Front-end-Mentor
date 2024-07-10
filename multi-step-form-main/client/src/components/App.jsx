import React, { useState } from 'react';
import './App.css';
import Personalnfo from './personalnfo';
import Plan from './plan';
import AddOns from './addOns';
import Summary from './Summary';

function App() {
  const [tab, setTab] = useState(0);

  const tabHandler = (tabIndex) => {
    setTab(tabIndex);
  };
  const [inputData, setInputData] = useState('');
  const handleDataSubmit = (data)=>{
    setInputData(data);
  }
  const [planData, setPlanData] = useState('');
  const handlePlanData = (pdata) =>{
    setPlanData(pdata);
  }
  const [addOnsData, setAddOnsData] = useState('');
  const handleOdata = (oData) =>{
    setAddOnsData(oData);
    console.log(oData);
  }
  return (
    <div className="app">
      {tab === 0 && <Personalnfo tabChange={tabHandler} onDataSubmit = {handleDataSubmit} />}
      {tab === 1 && <Plan tabChange={tabHandler} onPlanSubmit = {handlePlanData}/>}
      {tab === 2 && <AddOns tabChange={tabHandler} onAddOnSubmit = {handleOdata} />}
      {tab === 3 && <Summary tabChange={tabHandler} data={inputData} pdata={planData} oData = {addOnsData}/>}
    </div>
  );
}

export default App;

