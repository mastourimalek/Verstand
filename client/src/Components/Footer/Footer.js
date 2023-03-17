import React, { useState } from 'react'


import AddMessage from '../AddMessage/AddMessage'

const Footer = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  return (
    <div>
      <AddMessage/>

 <h1>footer</h1>
 <div>
      <button onClick={handleButtonClick}>Show Alert</button>
      {showAlert && (
        <div className="alert">
          <p>This is an alert message.</p>
          <button onClick={handleCloseAlert}>Close</button>
        </div>
      )}
    </div>
      </div>
  )
}

export default Footer