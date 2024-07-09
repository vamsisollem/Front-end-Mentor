import React, { useState } from 'react';
import './App.css';
import Personalnfo from './personalnfo';
import Plan from './plan';
import AddOns from './addOns';

function App() {
  const [tab, setTab] = useState(0);

  const tabHandler = (tabIndex) => {
    setTab(tabIndex);
  };

  return (
    <div className="app">
      {tab === 0 && <Personalnfo tabChange={tabHandler} />}
      {tab === 1 && <Plan tabChange={tabHandler} />}
      {tab === 2 && <AddOns tabChange={tabHandler}/>}
    </div>
  );
}

export default App;

