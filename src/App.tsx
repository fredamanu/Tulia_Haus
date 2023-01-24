import React from 'react';
import { Hero, Navbar } from './components';

import './App.css';

const App = () => {
  return (
    <div className="nav-heading-container">
      <Navbar />
      <main>
        <section className="heading">
          <Hero />
        </section>
      </main>
    </div>
  );
};

export default App;
