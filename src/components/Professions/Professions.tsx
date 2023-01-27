import React from 'react';
import {
  academia,
  business,
  fashion,
  health,
  legal,
  sports,
} from '../../assets';

import './Professions.css';
const Professions = () => {
  const images = [business, legal, academia, sports, health, fashion];
  return (
    <div style={{ textAlign: 'center' }}>
      <h3 className="prof-title">
        Afro-Diaspora Professional In All Walks Of Life
      </h3>
      <div className="prof">
        {images.map((item, index) => (
          <div key={index + item} className="sub-prof-container">
            <img src={item} alt={item} />

            <div className="sub-prof-overlay">
              <p className="description">
                {item === business
                  ? 'Entreprenuership/Business'
                  : item === legal
                  ? 'Legal & Politics'
                  : item === fashion
                  ? 'Fashion & Arts'
                  : item === health
                  ? 'Health'
                  : item === academia
                  ? 'Academia'
                  : 'Sports'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Professions;
