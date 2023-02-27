import FlashCard from "./FlashCard";
import "./custom.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

function FlashcardCarousel(props) {
  return (
    <Carousel>
      <Carousel.Item>
        <FlashCard question={"Question 1"} answer={"Answer 1"} />
      </Carousel.Item>
      <Carousel.Item>
        <FlashCard />
      </Carousel.Item>
      <Carousel.Item>
        <FlashCard />
      </Carousel.Item>
    </Carousel>
  );
}
export default FlashcardCarousel;
