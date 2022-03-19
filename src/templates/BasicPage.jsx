import React from 'react';
import MediaContainer from '../components/MediaContainer';
import Navigate from '../components/NavBar';
import Searchbar from '../components/Searchbar';
import './styles.scss';

const BasicPage = ({ withSearchbar, placeholder, elements }) => (
    <div className='basicPage'>
      <header>
        <Navigate />
        {withSearchbar && <Searchbar placeholder={placeholder} />}
      </header>
      <MediaContainer elements={elements} />
  </div>
);

export default BasicPage;
