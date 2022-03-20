import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import "./styles.scss";

const Searchbar = ({ placeholder, handleSearch }) => {
  const [search, setSearch] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    handleSearch(search);
  };

  return (
    <div className="searchContainer">
      <Form className="searchbar" onSubmit={onSearch}>
        <FormControl
          type="search"
          placeholder={placeholder ?? "Search for a gif"}
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>
      <Button
        className="searchButton"
        onClick={() => handleSearch(search)}
        tabIndex={0}
      >
        <AiOutlineSearch />
      </Button>
    </div>
  );
};

export default Searchbar;
