import FlashCard from './FlashCard';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

function FlashcardCarousel(props) {
  let isVisibleCardArray = [];
  let setIsVisibleCardArray = [];

  function displayCards() {
    const visibleCards = cards.filter((c) => isVisibleCardArray[c.key]);
    if (visibleCards.length > 0)
      return (<Carousel interval={null} indicators={false}>
        {cards.filter((c) => isVisibleCardArray[c.key])}
      </Carousel>);
    else
      return (
        <Carousel.Item>
          <div className="scene scene--card">
            <div className="card__face card__face--front">
              Good work!
              <button
                onClick={() => {
                  resetGame();
                }}
                className='btn btn-outline-light'
              >
                Reset
              </button>
            </div>
          </div>
        </Carousel.Item>
      );
  }

  function MakeFlashcard(question, answer, key) {
    // usestate, flashcard rendered when isVisible = true
    const [isVisible, setIsVisible] = useState(true);
    //add the usestate to list of all flashcard visability usestates
    isVisibleCardArray[key] = isVisible;
    setIsVisibleCardArray[key] = setIsVisible;
    //make the flashcard
    //removecard method uses setIsVisible of the current card to trigger change 
    //in isVisibleCardArray which triggers a chagnge in visibleCards array used in the displayCards method
    // thereby triggering the rebuild of the carusel
    return (
      <Carousel.Item key={key}>
        <FlashCard
          question={question}
          answer={answer}
          removeCardMethod={() => {
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
    for (let key in isVisibleCardArray) { 
      setIsVisibleCardArray[key](true)
    }
    
  }

  return (
    <div
      className='text-center question-container'
      style={{ width: '500px', backgroundColor: '#fdffcf' }}
    >
      <h1 className='mt-3'>{props.flashcardsData.header}</h1>
      {displayCards()}
    </div>
  );
}
export default FlashcardCarousel;
