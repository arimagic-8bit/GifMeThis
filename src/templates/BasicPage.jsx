import React from 'react';
import Navigate from '../components/NavBar';
import Searchbar from '../components/Searchbar';
import './styles.scss';

const BasicPage = ({ withSearchbar, placeholder }) => (
    <div className='basicPage'>
      <header>
        <Navigate />
        {withSearchbar && <Searchbar placeholder={placeholder} />}
      </header>
  </div>
)

export default BasicPage;
