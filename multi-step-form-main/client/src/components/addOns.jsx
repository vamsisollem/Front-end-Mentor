import React, { useState } from 'react'

function addOns({tabChange, onAddOnSubmit}) {
    function handleNext(){
        tabChange(3);
        onAddOnSubmit(selectedAddOns);
       }
       function handleBack(){
        tabChange(1);
       }
       const [selectedAddOns, setSelectedAddOns] = useState([]);
       const addAddOns = (addOnName, price)=>{
            const selectedAddon = selectedAddOns.includes(addOnName);
            if(selectedAddon){
                setSelectedAddOns(selectedAddOns.filter(addOn => addOn !== addOnName));
            }
            else{
                setSelectedAddOns([...selectedAddOns, {name: addOnName, price: price}]);
            }
       }
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
            <div className='number'>2</div>
            <div>
                <p>STEP2</p>
                <h4>SELECT PLAN</h4> 
            </div>
        </div>
        <div className='flex-row'>
            <div className='number number-active'>3</div>
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
   <h1>Pick add-ons</h1>
   <p>Add-ons help enhance your gaming experience</p>
    <div className='services'>
    <div className='service-container'>
        <div className='innerService-container'>
            <input type="checkbox" onChange={()=>addAddOns('Online Services', '+$1/mon')}></input>
            <div>
                <h5>Online Service</h5>
                <p>access to multiplayer games</p>
            </div>
        </div>
        <p>+$1/mo</p>
    </div>
    <div className='service-container'>
        <div className='innerService-container'>
            <input type="checkbox" onChange={()=>addAddOns('Larger Storage', '+$2/mon')}></input>
            <div>
                <h5>Larger storage</h5>
                <p>Extra 1TB of cloud save</p>
            </div>
        </div>
        <p>+$2/mo</p>
    </div>
    <div className='service-container'>
        <div className='innerService-container'>
            <input type="checkbox" onChange={()=>addAddOns('Customizable Profile', '+$2/mon')}></input>
            <div>
                <h5>Customizable Profile</h5>
                <p>custom theme on your profile</p>
            </div>
        </div>
        <p>+$2/mo</p>
    </div> 
    </div>
   <div>
        <button className='back' onClick={handleBack}>Go Back</button>
        <button className='next' onClick={handleNext}>Next Step</button>
   </div>
</div>
</div>
  )
}

export default addOns;
