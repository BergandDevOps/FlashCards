import React from 'react';
import { useState } from 'react';
function FlashCard(props) {
  const [isActive, setActive] = useState(true);
  const ToggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className='scene scene--card'>
      <div
        onClick={ToggleClass}
        className={`card ${isActive ? 'null' : 'is-flipped'}`}
      >
        <div className='card__face card__face--front'>{props.question}</div>
        <div className='card__face card__face--back'>{props.answer}</div>
      </div>
    </div>
  );
}
export default FlashCard;
