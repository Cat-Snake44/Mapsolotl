import React from 'react';
import cat from '../assets/catSnake.jpeg';

const Header = () => {
  return (
    <div className='header'>
      <div className='sub-header'>
        <h1>
          <img src={cat}></img>
          Cat<span> Snake</span>
        </h1>
      </div>
      <div className='nav-container'>
        <button>
          <a href='./login'>LOGIN</a>
        </button>
      </div>
    </div>
  );
};
export default Header;
