import React from 'react';

import { hero } from '../../assets';
import './Hero.css';

const Hero = () => {
  return (
    <header className="hero">
      <img src={hero} alt="hero" className="hero-img" />
      <h1 className="hero-title">
        1+ Million <br />
        Black People in Germany Alone
      </h1>
      <p className="hero-subtitle">
        <a href="deutcheland.de" target={'blank'} rel="noreferrer">
          deutchland.de
        </a>
      </p>
    </header>
  );
};

export default Hero;
