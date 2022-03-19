import React, { useEffect } from 'react';
import './styles.scss';
import BasicPage from '../../templates/BasicPage';
import { getGifs } from '../../services/redux/gifs/actions';

const Intro = () => {
  
  useEffect(() => {
    getGifs(25);
  }, [])
  
  return (
  <div className="App">
    <BasicPage 
      withSearchbar 
      placeholder="Search for a gif"
    />
  </div>
)}

export default Intro;
