import React from 'react';

import { STATUS } from '../../constants';

function GuessInput({ gameStatus, handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        required
        disabled={gameStatus !== STATUS.RUNNING}
        id='guess-input'
        type='text'
        value={tentativeGuess}
        minLength={5}
        maxLength={5}
        pattern='[a-zA-Z]{5}'
        title='Five letter word'
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
