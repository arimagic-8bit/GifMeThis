import React from "react";
import './styles.scss';

const MediaContainer = ({ elements }) => (
  <div className="mediaContainer">
    {elements.length 
      ? elements.map((element) => (
        <div className="media">
          <img src={element.urlMedium} alt={element.title} />
        </div>
      ))
      : null
      }
  </div>
);

export default MediaContainer;
