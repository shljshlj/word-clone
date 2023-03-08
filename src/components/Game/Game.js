import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { BannerHappy, BannerSad } from '../Banner';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED, STATUS } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState(STATUS.RUNNING);
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus(STATUS.WON);
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus(STATUS.LOST);
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameStatus === STATUS.WON && <BannerHappy>{guesses.length}</BannerHappy>}
      {gameStatus === STATUS.LOST && <BannerSad>{answer}</BannerSad>}
    </>
  );
}

export default Game;
