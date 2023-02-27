import React from "react";
import { useState } from "react";
function FlashCard(props) {
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className="scene scene--card">
      <div
        onClick={ToggleClass}
        className='card {isActive ? "is-flipped" : "null"}'
      >
        <div className="card__face card__face--front">front</div>
        <div className="card__face card__face--back">back</div>
      </div>
    </div>
  );
}
export default FlashCard;
