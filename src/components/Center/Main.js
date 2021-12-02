import React from 'react';
import { zodiac } from '../../Data';
import background from '../../background.png';
import ZodiacCard from '../Zodiac-Card/ZodiacCard';

export default function main() {
  return (
    <main className="background" style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((item) => (
        <ZodiacCard key={item.name} {...item} />
      ))}
    </main>
  );
}
