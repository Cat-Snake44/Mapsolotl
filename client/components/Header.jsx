import React from 'react';
import cat from '../assets/catSnake.jpeg';

const Header = () => {
  return (
    <div class='header'>
      <div class='sub-header'>
        <h1>
          <img src={cat}></img>
          Cat<span> Snake</span>
        </h1>
      </div>
      <div class='nav-container'>
        <button>
          <a href='./login'>LOGIN</a>
        </button>
      </div>
    </div>
  );
};
export default Header;
