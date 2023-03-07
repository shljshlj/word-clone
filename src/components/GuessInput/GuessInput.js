import React from 'react';

function GuessInput({ handleAddGuess }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const formatedGuess = guess.toUpperCase();
    handleAddGuess(formatedGuess);
    setGuess('');
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={guess}
        minLength={5}
        maxLength={5}
        // pattern={/[a-zA-Z]/gi}
        title='Five letter word'
        onChange={(event) => setGuess(event.target.value)}
      />
    </form>
  );
}

export default GuessInput;
