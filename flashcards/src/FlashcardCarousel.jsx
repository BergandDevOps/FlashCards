import FlashCard from './FlashCard';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

function FlashcardCarousel(props) {
  let isVisibleCard = [];

  function displayCards() {
    const visibleCards = cards.filter((c) => isVisibleCard[c.key]);
    if (visibleCards.length > 0)
      return cards.filter((c) => isVisibleCard[c.key]);
    else
      return (
        <Carousel.Item>
          <div className="scene scene--card">
            <div className="card__face card__face--front">
              YOU WIN!
              <button
                onClick={() => {
                  resetGame(isVisibleCard);
                }}
                className="btn btn-primary"
              >
                Reset
              </button>
            </div>
          </div>
        </Carousel.Item>
      );
  }

  function MakeFlashcard(question, answer, key) {
    const [isVisible, setIsVisible] = useState(true);
    isVisibleCard[key] = isVisible;
    return (
      <Carousel.Item key={key}>
        <FlashCard
          question={question}
          answer={answer}
          onClickMethod={() => {
            setIsVisible(false);
          }}
        />
      </Carousel.Item>
    );
  }

  function MakeFlashcards(flashcardsData) {
    return flashcardsData.questions.map((f, i) =>
      MakeFlashcard(f.question, f.answer, 'question' + i)
    );
  }
  let cards = MakeFlashcards(props.flashcardsData);

  function resetGame() {
    console.log(isVisibleCard);
  }

  return (
    <Card
      className='text-center question-container'
      style={{ width: '500px', backgroundColor: '#fdffcf' }}
    >
      <h1 className='mt-3'>{props.flashcardsData.header}</h1>
      <Card.Body>
        <Carousel interval={null} indicators={false}>
          {displayCards()}
        </Carousel>
      </Card.Body>
    </Card>
  );
}
export default FlashcardCarousel;
