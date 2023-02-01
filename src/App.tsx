import React from 'react';
import { Hero, Navbar, Observations, Problem, Professions } from './components';

import './App.css';

const App = () => {
  return (
    <div className="container">
      <div id="header">
        <Navbar />
        <Hero />
      </div>
      <main>
        <section>
          <Professions />
        </section>
        <section>
          <Observations />
        </section>
        <section>
          <Problem />
        </section>
      </main>
    </div>
  );
};

export default App;
