import React from 'react';

const SmallHero = (image) => (
  <img
    style={{
      width: '100%',
      height: '268px',
      objectFit: 'cover',
      display: 'flex'
    }}
    src={image.banner}
    width="2048"
    height={image.height}
    alt={image.alt}
    className={`img-fluid ${image.className}`}
  />
);

export default SmallHero;
