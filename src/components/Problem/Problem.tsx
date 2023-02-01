import React from 'react';
import { community, connection, trust } from '../../assets';

import './Problem.css';
const Problem = () => {
  const images = [community, connection, trust];
  return (
    <div
      style={{ marginTop: '15rem', textAlign: 'center' }}
      className="problem"
    >
      <h3 className="problem-title">
        The Problem For Afro-Diaspora Professionals
      </h3>
      <div className="problem-container">
        {images.map((item, index) => (
          <div key={index + item} className="sub-problem-container">
            <img src={item} alt={item} />

            <div className="problem-desc-container">
              <p className="problem-desc">
                {item === community
                  ? 'Lack of Community (UBUNTU)'
                  : item === connection
                  ? 'Lack of Deep connection with like-minded Afro-Diaspora Professionals'
                  : 'Lack of Trust'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Problem;
