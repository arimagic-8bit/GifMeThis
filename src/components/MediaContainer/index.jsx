import React, { useState, Suspense } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Gif from "../../elements/Gif";
import SimpleModal from "../Modal";
import './styles.scss';

const MediaContainer = ({ elements, onPaginate, modalContent }) => {
  const [selectedElement, setSelectedElement] = useState();
  const [openModal, setOpenModal] = useState(false);

  const handleModal = (element) => {
    setSelectedElement(element);
    setOpenModal(true);
  };

  return (
  <div className="mediaContainer">
    <InfiniteScroll
      dataLength={elements.length}
      next={onPaginate}
      hasMore={true}
      loader={<div className="loading" />}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {elements.length 
        ? elements.map((element, index) => (
        <Gif element={element} index={index} handleModal={handleModal} />        
      ))
        : null
      }
    </InfiniteScroll>
    {openModal && (
      <SimpleModal 
        show={openModal} 
        withHeader
        handleClose={() => setOpenModal(false)}
        modalContent={modalContent}
        element={selectedElement}
      />)}
  </div>
)};

export default MediaContainer;
