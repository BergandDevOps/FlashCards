import React from 'react';
import { useState } from 'react';
function FlashCard(props) {
  const [isActive, setActive] = useState(true);
  const ToggleClass = () => {
    setActive(!isActive);
    console.log('toggle');
  };

  return (
    <div className='scene scene--card'>
      <div
        onClick={ToggleClass}
        className={`card ${isActive ? 'null' : 'is-flipped'}`}
      >
        <div className='card__face card__face--front'>{props.question}</div>
        <div className='card__face card__face--back'>
          {props.answer}
          <br />
          {/* Ändra så att kortet inte tas bort direkt utan först när next kard kallas på eller så att removeCardMethod byter kort */}
          <button
            onClick={() => props.removeCardMethod()}
            className='btn btn-outline-light'
          >
            Remove Card
          </button>
        </div>
      </div>
    </div>
  );
}
export default FlashCard;
