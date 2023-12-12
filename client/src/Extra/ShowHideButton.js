import React, { useState } from 'react';

function ShowHideButton({ buttonText, hiddenText }) {
  const [isHidden, setIsHidden] = useState(true);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div>
      <button onClick={toggleVisibility} className='white-button'>
        {buttonText}
      </button>
      {!isHidden && (
        <div>
          <p>{hiddenText}</p>
        </div>
      )}
    </div>
  );
}

export default ShowHideButton;