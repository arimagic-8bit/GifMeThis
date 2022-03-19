import React from "react";
import BasicPage from "../../templates/BasicPage";

const Favourites = () => (
  <div className="favourites">
    <BasicPage 
      withSearchbar 
      placeholder="Search your favourites" />
  </div>
)

export default Favourites;
