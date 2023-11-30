import React from 'react';
import zipCache from '../data/zipcodes.js';
import { useDispatch } from 'react-redux';
import ListContainer from './ListContainer.jsx';
import { DISPLAY_SEARCH } from '../reducers/reducer.js';
import Header from '../components/Header.jsx';
import { IS_LOADING_TRUE } from '../reducers/loadingReducer.js';
import { IS_LOADING_FALSE } from '../reducers/loadingReducer.js';

// adding to url
// api needs latitude and longitude so we are using zipCache to convert zip to lat/long
const App = () => {
  const dispatch = useDispatch();
  async function searchClick() {
    dispatch(IS_LOADING_TRUE());
    // sent as get request to server, fetch made by middleware
    const response = await fetch(
      '/api/trails?' +
        new URLSearchParams({
          lat:
            zipCache[document.getElementById('zip').value].latitude || //gets value from lat input text box on click
            document.getElementById('lat').value,
          lon:
            zipCache[document.getElementById('zip').value].longitude || //gets value from long input text box on click
            document.getElementById('long').value,
          radius: document.getElementById('radius').value, //gets value from radius input text box on click
        })
    );

    const result = await response.json();
    console.log('result is' + result);
    dispatch(IS_LOADING_FALSE());
    dispatch(DISPLAY_SEARCH(result)); //dispatches data to DISPLAY_SEARCH reducer
  }

  return (
    <div className='App'>
      <Header />
      <div className='header-search-container'>
        <div className='inputs'>
          <label htmlFor='zip'>ZIP CODE: </label>
          <input
            className='input '
            name='zip'
            type='text'
            id='zip'
            placeholder='Ex: 48912'
          ></input>
          <label htmlFor='radius'>MILE RADIUS: </label>
          <input
            className='input'
            name='radius'
            type='text'
            id='radius'
            placeholder='Default: 25 miles'
          ></input>
          <button
            className='button'
            onClick={searchClick} //invokes function to grab user input data and dispatch to reducer
            id='submit'
          >
            SUBMIT
          </button>
          <a href='./login' id='loginButton'>
            LOGIN
          </a>
        </div>
      </div>

      <div className='main-container'>
        <ListContainer />
      </div>
    </div>
  );
};

export default App;
