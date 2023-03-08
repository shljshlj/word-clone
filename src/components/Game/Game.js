import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { BannerHappy, BannerSad } from '../Banner';

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
  const [numOfGuesses, setNumOfGuesses] = React.useState(0);
  const [gameEnd, setGameEnd] = React.useState(false);
  const [isGameWon, setIsGameWon] = React.useState(false);

  function handleAddGuess(newGuess) {
    const [result, isCorrect] = checkGuess(newGuess, answer);
    const guess = {
      guess: result,
      isCorrect,
    };
    setGuessResultsList([...guessResultsList, guess]);

    console.log('check if is correct: ', isCorrect);
    isCorrect && setIsGameWon(true);
    console.log({ isGameWon });

    if (numOfGuesses === NUM_OF_GUESSES_ALLOWED || isGameWon) {
      setGameEnd(true);
      return;
    }

    setNumOfGuesses(numOfGuesses + 1);
  }

  return (
    <>
      <GuessResults
        numOfGuesses={NUM_OF_GUESSES_ALLOWED}
        guessResultsList={guessResultsList}
      />
      <GuessInput handleAddGuess={handleAddGuess} />
      {gameEnd &&
        (isGameWon ? (
          <BannerHappy>{numOfGuesses}</BannerHappy>
        ) : (
          <BannerSad>{answer}</BannerSad>
        ))}
    </>
  );
}

export default Game;
