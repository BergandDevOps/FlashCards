import FlashCard from './FlashCard';
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
  return (
    <Card
      className='text-center question-container'
      style={{ width: '500px', backgroundColor: '#fdffcf' }}
    >
      <h1 className='mt-3'>{props.flashcardsData.header}</h1>
      <Card.Body>
        <Carousel interval={null} indicators={false}>
          {cards.filter((c) => isVisibleCard[c.key])}
        </Carousel>
      </Card.Body>
    </Card>
  );
}
export default FlashcardCarousel;
