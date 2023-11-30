import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AddPhotos = (props) => {
  return (
    <div>
      <label htmlFor='uploadPhotoInput'>Upload Photo: </label>
      <input type='file' id='uploadPhotoInput'></input>
      <button className='button' id='addPhoto'>Add Photo</button>
    </div>
  )
}

export default AddPhotos;