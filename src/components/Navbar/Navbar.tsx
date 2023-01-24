import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { RxPerson } from 'react-icons/rx';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';

import './Navbar.css';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleSidebar = (e: any) => {
    console.log(e.type);
    setOpenMenu(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo-container">
        <h3>
          <a href="">Tulia Haus</a>
        </h3>
      </div>

      <div className="nav-links-container">
        <ul className="nav-links">
          {['home', 'others', 'about', 'projects', 'contact'].map(
            (item, index) => (
              <li key={index}>
                <a href=""> {item}</a>
              </li>
            )
          )}
        </ul>
        <button
          onMouseEnter={() => {
            setOpenMenu((prev) => !prev);
          }}
          onClick={() => {
            setOpenMenu((prev) => !prev);
          }}
          className="hamburger-menu"
        >
          <HiOutlineMenuAlt2 />
        </button>

        <div
          style={{
            visibility: openMenu ? 'visible' : 'hidden',
          }}
          className="overlay"
        >
          <div
            className={`overlay-left ${openMenu ? 'slide-in' : 'slide-out'}`}
            onMouseLeave={handleSidebar}
          >
            <AiOutlineClose onClick={handleSidebar} />
            {openMenu && (
              <ul className="overlay-left-navlinks">
                {['home', 'others', 'about', 'projects', 'contact'].map(
                  (item, index) => (
                    <li key={index}>
                      <a href="https://www.google.com/">{item}</a>
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
          <div className="overlay-right" onClick={handleSidebar}>
            <div className="overlay-right-top"></div>
            <div className="overlay-right-bottom"></div>
          </div>
        </div>
      </div>

      <div className="nav-icons-container">
        <FiSearch />
        <RxPerson />
      </div>
    </nav>
  );
};

export default Navbar;
