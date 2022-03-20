import React, { useEffect } from "react";
import BasicPage from "../../templates/BasicPage";
import { useSelector } from "react-redux";
import ModalContent from "../../components/Modal/ModalContent";
import { saveFavourites } from "../../services/redux/gifs/actions";
import { retrieveFromLocalStorage } from "../../models/Media/utils";
import Media from "../../models/Media";

const Favourites = () => {
  const favourites = useSelector((reduxState) =>
    Object.values(reduxState.gifs.favourites)
  );

  useEffect(() => {
    const retrieved = retrieveFromLocalStorage();
    if (!retrieved.length) {
      const instanced = {};
      Object.entries(retrieved).forEach(([key, value]) => {
        instanced[key] = new Media(value);
      });
      saveFavourites(instanced);
    }
  }, []);

  return (
    <div className="favourites">
      <BasicPage
        placeholder="Search your favourites"
        elements={favourites}
        modalContent={ModalContent}
        withSeparator
        withList
      />
    </div>
  );
};

export default Favourites;
