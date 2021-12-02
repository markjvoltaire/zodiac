import React from 'react';
import './ZodiacCard.css';

export default function ZodiaCard({ name, dates }) {
  return (
    <div className="zodiac-card">
      <img src={`${process.env.PUBLIC_URL}/zodiacs/${name}.png`}></img>
      <div className="name">{name}</div>
      <div className="dates">{dates}</div>
    </div>
  );
}
