import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';
import BasicPage from '../../templates/BasicPage';
import { deleteGifList, getGifs, saveFavourites, searchGifs } from '../../services/redux/gifs/actions';
import { queryBuilder } from '../utils';
import ModalContent from '../../components/Modal/ModalContent';
import { retrieveFromLocalStorage } from '../../models/Media/utils';

const Intro = () => {
  const gifList = useSelector((reduxState) => reduxState.gifs.list);
  const fetching = useSelector((reduxState) => reduxState.gifs.fetching);
  const [query, setQuery] = useState({offset: 0});
  const [isSearch, setIsSearch] = useState(false);

  const updateOffset = () => setQuery({...query, offset: query.offset += 25});

  const handleSearch = (word) => {
    deleteGifList();
    
    let newQuery = {};
    
    if (word) {
      newQuery = Object.assign({}, query, {
        q: word,
        lang:'en',
        offset: 0,
        limit: 25,
      });
      setIsSearch(true);
    } else {
      newQuery = { offset:0 };
      setIsSearch(false);
    }
        
    setQuery(newQuery);
  };

  useEffect(() => {
    saveFavourites(retrieveFromLocalStorage());
  }, [])
    
  useEffect(() => {
    if (isSearch) {
      searchGifs(queryBuilder(query, true));
    } else {
      getGifs(queryBuilder(query, true));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])
  
  return (
  <div className="App">
    <BasicPage 
      withSearchbar 
      placeholder="Search for a gif"
      elements={gifList}
      onPaginate={updateOffset}
      fetching={fetching}
      modalContent={ModalContent}
      handleSearch={handleSearch}
      withList
    />
  </div>
)}

export default Intro;
