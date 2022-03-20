import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Gif = ({ element, index, handleModal }) => (
    <div className="media" key={`${element.id}-${index}`}>
      <LazyLoadImage 
        src={element.urlMedium} 
        alt={element.title} 
        onClick={() => handleModal(element)}
        className={`img-${element.id}`}
        placeholder={<div className="loading" />}
      />
  </div>
);

export default Gif;
