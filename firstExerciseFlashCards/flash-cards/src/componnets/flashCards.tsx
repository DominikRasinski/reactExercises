import { useState } from 'react';
import { questions } from './data.js';

type value = number | null;

export const FlashCards = () => {
  const [selectedId, setSelectedId] = useState<value>(null);

  function handleClick(id: value) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className='flashcards'>
      {questions.map((question) => {
        return (
          <div
            key={question.id}
            onClick={() => handleClick(question.id)}
            className={question.id === selectedId ? 'selected' : ''}>
            <p>
              {question.id === selectedId ? question.answer : question.question}
            </p>
          </div>
        );
      })}
    </div>
  );
};
