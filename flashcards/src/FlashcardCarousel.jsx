import FlashCard from './FlashCard';
import './style.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

function FlashcardCarousel(props) {
  let isVisibleCard = [];

  function MakeFlashcard(question, answer, key) {
    const [isVisible, setIsVisible] = useState(true);
    isVisibleCard[key] = isVisible;
    return (
      <Carousel.Item key={key}>
        <FlashCard question={question} answer={answer} onClickMethod={() => { setIsVisible(!isVisible)} } />
      </Carousel.Item>
    );
  }

  function MakeFlashcards(flashcardsData) {
    return flashcardsData.questions.map((f, i) =>
      MakeFlashcard(f.question, f.answer, 'question' + i)
    );
  }
  let cards = MakeFlashcards(props.flashcardsData);
  return (
    <Card
      className="text-center container"
      style={{ width: '500px', backgroundColor: '#ffe988' }}
    >
      <h4>{props.flashcardsData.header}</h4>
      <Card.Body>
        <Carousel interval={null}>
          {cards.filter((c) => isVisibleCard[c.key])}
        </Carousel>
      </Card.Body>
    </Card>
  );
}
export default FlashcardCarousel;
