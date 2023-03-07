import React from 'react';

function GuessResults({ guessResultsList }) {
  return (
    <div className='guess-results'>
      {guessResultsList.map(({ guess, id }) => (
        <p key={id} className='guess'>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
