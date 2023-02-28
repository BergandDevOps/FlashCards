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
    { question: 'Vad heter Sveriges huvudstad?', answer: 'Stockholm' },
    { question: 'Vilket är det bästa länet i Sverige?', answer: 'Norrbotten' },
    {
      question: 'Vilken är den finaste staden i hela världen?',
      answer: 'Luleå',
    },
    {
      question: 'Hur många cyklar finns det på tunnelbanan?',
      answer: 'Alltför få',
    },
  ],
};

root.render(
  <React.StrictMode>
    <FlashcardCarousel flashcardsData={flashcardsData} />
  </React.StrictMode>
);
