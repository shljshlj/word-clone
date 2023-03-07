import React from 'react';

import { range } from '../../utils';

function Guess({ guess = '' }) {
  console.log({ guess });
  return (
    <p className='guess'>
      {range(5).map((idx) => (
        <span key={idx} className='cell'>
          {guess[idx] || ''}
        </span>
      ))}
    </p>
  );
}

export default Guess;
