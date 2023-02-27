function FlashCard(props) {
  return (
    <div className="scene scene--card">
      <div className="card is-flipped">
        <div className="card__face card__face--front">front</div>
        <div className="card__face card__face--back">back</div>
      </div>
    </div>
  );
}
export default FlashCard;
