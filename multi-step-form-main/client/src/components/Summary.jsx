import React from 'react';

function Summary({ data, pdata, oData, tabChange}) {
    const handleBack = () => {
        tabChange(2);
      };
    
      const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/submitFormData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify({
                    Name: data.Name,
                    Email: data.Email,
                    Phone: data.Phone,
                    Plan: pdata,
                    AddOns: oData,
                }),
            });
            if (response.ok) {
                console.log('Form data submitted');
            } else {
                console.error('Failed to submit the data');
            }
        } catch (error) {
            console.error('Error submitting the data:', error);
        }
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
          <div className='number number-active'>4</div>
          <div>
            <p>STEP4</p>
            <h4>SUMMARY</h4>
          </div>
        </div>
      </div>
      <div className='content'>
        <h1>Summary</h1>
        <p>Here is the list of details of your purchase</p>
        <div className='summary-details'>
        <ul className='summaryList'>
          <li><span className='summaryLabels'>Name: </span>{data.Name}</li>
          <li><span className='summaryLabels'>Email: </span>{data.Email}</li>
          <li><span className='summaryLabels'>Phone: </span>{data.Phone}</li>
          <li><span className='summaryLabels'>Plan: </span>{pdata}</li>
          <li>
            <span className='summaryLabels'>AddOns:</span>
            <ul>
              {oData.map((item, index) => (
                <li key={index}>
                  {item.name}({item.price})
                </li>
              ))}
            </ul>
          </li>
        </ul>
        </div>
        <div>
          <button className='back' onClick={handleBack}>Go Back</button>
          <button className='next' onClick= {()=>handleSubmit()}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Summary;
