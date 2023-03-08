import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
// import { BannerHappy, BannerSad } from '../Banner';

import { sample } from '../../utils';
import { WORDS } from '../../data';
// import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [numOfGuesses, setNumOfGuesses] = React.useState(0);
  // const [gameEnd, setGameEnd] = React.useState(false);
  // const [isGameWon, setIsGameWon] = React.useState(false);

  function handleSubmitGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);

    // console.log('check if is correct: ', isCorrect);
    // isCorrect && setIsGameWon(true);
    // console.log({ isGameWon });

    // if (numOfGuesses === NUM_OF_GUESSES_ALLOWED || isGameWon) {
    //   setGameEnd(true);
    //   return;
    // }

    setNumOfGuesses(numOfGuesses + 1);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
      {/* {gameEnd &&
        (isGameWon ? (
          <BannerHappy>{numOfGuesses}</BannerHappy>
        ) : (
          <BannerSad>{answer}</BannerSad>
        ))} */}
    </>
  );
}

export default Game;
