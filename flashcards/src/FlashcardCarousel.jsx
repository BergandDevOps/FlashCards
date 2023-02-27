import FlashCard from './FlashCard';
import './style.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

function FlashcardCarousel(props) {
  function makeFlashcard(question, answer, key) {
    return (
      <Carousel.Item key={key}>
        <FlashCard question={question} answer={answer} />
      </Carousel.Item>
    );
  }

  function makeFlashcards(flashcardsData) {
    return flashcardsData.questions.map((f, i) =>
      makeFlashcard(f.question, f.answer, i)
    );
  }

  return (
    <Card
      className='text-center container'
      style={{ width: '500px', backgroundColor: '#ffe988' }}
    >
      <h4>{props.flashcardsData.header}</h4>
      <Card.Body>
        <Carousel>{makeFlashcards(props.flashcardsData)}</Carousel>
      </Card.Body>
    </Card>
  );
}
export default FlashcardCarousel;
