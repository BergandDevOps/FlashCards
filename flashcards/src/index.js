import React from 'react';
import ReactDOM from 'react-dom/client';
import FlashcardCarousel from './FlashcardCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const flashcardsData = {
  header: 'Heather',
  questions: [
    { question: 'Question 1', answer: 'Answer 1' },
    { question: 'Question 2', answer: 'Answer 2' },
    { question: 'Question 3', answer: 'Answer 3' },
    { question: 'Question 4', answer: 'Answer 4' },
  ],
};

root.render(
  <React.StrictMode>
    <FlashcardCarousel flashcardsData={flashcardsData} />
  </React.StrictMode>
);

