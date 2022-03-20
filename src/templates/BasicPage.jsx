import React from "react";
import MediaContainer from "../components/MediaContainer";
import Searchbar from "../components/Searchbar";
import "./styles.scss";

const BasicPage = ({
  withSearchbar,
  placeholder,
  elements,
  onPaginate,
  fetching,
  modalContent,
  withSeparator,
  content: Content,
  handleSearch,
  withList,
}) => (
  <div className="basicPage">
    <header>
      {withSearchbar && (
        <Searchbar placeholder={placeholder} handleSearch={handleSearch} />
      )}
      {withSeparator && <hr />}
    </header>
    {withList && (
      <MediaContainer
        elements={elements}
        onPaginate={onPaginate}
        fetching={fetching}
        modalContent={modalContent}
      />
    )}
    {Content && <Content />}
  </div>
);

export default BasicPage;
