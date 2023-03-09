import React from 'react';

const ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function getStatusByLetter(validatedGuesses) {
  return validatedGuesses.reduce((statusObj, guess) => {
    guess.forEach(({ letter, status }) => {
      if (statusObj[letter]) {
        if (statusObj[letter] === 'correct') return;
        if (statusObj[letter] === 'misplaced') {
          status === 'correct' && (statusObj[letter] = status);
          return;
        }
      }
      statusObj[letter] = status;
    });

    return statusObj;
  }, {});
}

function Keyboard({ validatedGuesses }) {
  const statusByLetters = getStatusByLetter(validatedGuesses);

  return (
    <div className='keyboard'>
      {ROWS.map((row, index) => {
        return (
          <div className='keyboard-row' key={index}>
            {row.map((letter) => {
              return (
                <div
                  key={letter}
                  className={`letter ${statusByLetters[letter] || ''}`}
                >
                  {letter}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Keyboard;
