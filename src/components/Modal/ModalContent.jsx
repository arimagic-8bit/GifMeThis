import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AiFillHeart } from 'react-icons/ai';

const ModalContent = ({ element }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const favourites = useSelector((reduxState) => reduxState.gifs.favourites);

  const handleFavButton = () => {
    if (isFavourite) {
      element.deleteFavourite();
    } else {
      element.save();
    }
  };

  useEffect(() => {
    setIsFavourite(!!favourites[element.id]);
  }, [favourites, element])
  
  return (
  <div className="d-flex justify-content-around">
      <div className="imgContainer p-2">
        <img src={element.urlMedium} alt={element.title} />
      </div>
      <div className="p-2 infoContainer">
        <div className="buttonsContainer">
          <div 
            className="d-flex align-items-center customButton"
            onClick={() => handleFavButton()}
            >
              <AiFillHeart className={isFavourite ? 'favourite' : ''}/>
              <p className="mb-0">Favourite</p>
          </div>
        </div>
        <hr />
        <div className="attributesContainer">
          {Object.entries(element.attributes).map(([key, value]) => (
            <p>{`${key}: ${value}`}</p>
          ))}
        </div>
      </div>
  </div>
)};

export default ModalContent;
