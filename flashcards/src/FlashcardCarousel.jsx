import FlashCard from "./FlashCard";
import "./style.css";
import Carousel from "react-bootstrap/Carousel";

function FlashcardCarousel(props) {
  return (
    <Card style={{ width: "500px", backgroundColor: "grey" }}>
      <Card.Body>
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
      </Card.Body>
    </Card>
  );
}
export default FlashcardCarousel;
