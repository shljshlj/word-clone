import React from 'react';
import Guess from '../Guess';

import { range } from '../../utils';

function GuessResults({ numOfGuesses, guesses }) {
  return (
    <div className='guess-results'>
      {range(numOfGuesses).map((guessIdx) => (
        <Guess key={guessIdx} guess={guesses[guessIdx]?.guess} />
      ))}
    </div>
  );
}

export default GuessResults;
