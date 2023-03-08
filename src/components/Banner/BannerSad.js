import React from 'react';
import Banner from './Banner';

function BannerSad({ children }) {
  return (
    <Banner status={'sad'}>
      Sorry, the correct answer is <strong>{children}</strong>.
    </Banner>
  );
}

export default BannerSad;
