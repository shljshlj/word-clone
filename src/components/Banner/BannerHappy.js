import React from 'react';
import Banner from './Banner';

function BannerHappy({ children }) {
  return (
    <Banner status={'happy'}>
      <strong>Congratulations!</strong> Got it in
      <strong> {children} guesses</strong>.
    </Banner>
  );
}

export default BannerHappy;
