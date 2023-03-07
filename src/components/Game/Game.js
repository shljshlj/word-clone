import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResultsList, setGuessResultsList] = React.useState([]);

  function handleAddGuess(newGuess) {
    if (guessResultsList.length >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    const checkedGuess = {
      guess: checkGuess(newGuess, answer),
    };

    setGuessResultsList([...guessResultsList, checkedGuess]);
  }

  return (
    <>
      <GuessResults
        numOfGuesses={NUM_OF_GUESSES_ALLOWED}
        guessResultsList={guessResultsList}
      />
      <GuessInput handleAddGuess={handleAddGuess} />
    </>
  );
}

export default Game;
