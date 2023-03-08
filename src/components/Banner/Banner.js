import React from 'react';

function Banner({ status, children }) {
  return (
    <div className={`banner ${status}`}>
      <p>{children}</p>
    </div>
  );
}

export default Banner;
