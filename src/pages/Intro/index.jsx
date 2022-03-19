import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';
import BasicPage from '../../templates/BasicPage';
import { getGifs } from '../../services/redux/gifs/actions';

const Intro = () => {

  const gifList = useSelector((reduxState) => reduxState.gifs.list);
    
  useEffect(() => {
    getGifs(25);
  }, [])
  
  return (
  <div className="App">
    <BasicPage 
      withSearchbar 
      placeholder="Search for a gif"
      elements={gifList}
    />
  </div>
)}

export default Intro;
