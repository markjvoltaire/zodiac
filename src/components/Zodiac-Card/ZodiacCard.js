import React from 'react';
import './ZodiacCard';

export default function Zodiacs({ name, dates, sign }) {
  return (
    <div className="animal" style={{ name: name, dates: dates }}>
      <img src={`${process.env.PUBLIC_URL}/zodiac/${sign}.svg`} />
      <span className="name">{name}</span>
      <span>{dates}</span>
    </div>
  );
}
