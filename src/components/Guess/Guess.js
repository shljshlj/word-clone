import React from 'react';

import { range } from '../../utils';

function Guess({ guess = [] }) {
  return (
    <p className='guess'>
      {range(5).map((idx) => (
        <span
          key={idx}
          className={`cell${guess.length ? ' ' + guess[idx]?.status : ''}`}
        >
          {guess[idx]?.letter || ''}
        </span>
      ))}
    </p>
  );
}

export default Guess;
