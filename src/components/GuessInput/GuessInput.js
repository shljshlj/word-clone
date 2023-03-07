import React from 'react';

function GuessInput({ handleAddGuess }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (guess.length !== 5) {
      window.alert('Word has to have exactly five letters');
      return;
    }

    handleAddGuess(guess);
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
        pattern='[a-zA-Z]{5}'
        title='Five letter word'
        onChange={(event) => {
          const formatedInput = event.target.value.toUpperCase();
          setGuess(formatedInput);
        }}
      />
    </form>
  );
}

export default GuessInput;
