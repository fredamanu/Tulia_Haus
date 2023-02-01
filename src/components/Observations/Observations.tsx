import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { carousel1, carousel2, carousel3 } from '../../assets';
import './Observations.css';

const Observations = () => {
  const images = [carousel1, carousel2, carousel3];
  const texts = [
    'How come you speak German or English so well',
    'Your hair may be a bit unprofessional',
    'You dont look or sound black enough',
  ];
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= images.length ? 0 : newIndex);
  };
  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? images.length - 1 : newIndex);
  };

  return (
    <div className="obs-container">
      <div className="obs-img-container">
        <img src={images[index]} />
        <div onClick={handlePrevious} className="arrow-left-container">
          <FaArrowLeft />
        </div>
        <div onClick={handleNext} className="arrow-right-container">
          <FaArrowRight />
        </div>
      </div>
      <div className="obs-text-container">
        <h3>Here Are Some Interesting Observations:</h3>
        <hr />
        <p>{texts[index]}</p>
        <hr />
      </div>
      <div className="obs-controls">
        <div
          onClick={() => {
            setIndex(0);
          }}
          className={index === 0 ? 'current-control' : ''}
        ></div>
        <div
          onClick={() => {
            setIndex(1);
          }}
          className={index === 1 ? 'current-control' : ''}
        ></div>
        <div
          onClick={() => {
            setIndex(2);
          }}
          className={index === 2 ? 'current-control' : ''}
        ></div>
      </div>
    </div>
  );
};

export default Observations;
