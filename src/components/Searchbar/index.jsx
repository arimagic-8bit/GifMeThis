import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import "./styles.scss"

const Searchbar = ({ placeholder }) => {
  
  const [search,setSearch] = useState('');

  return (
    <div className="searchContainer">
      <Form className="searchbar">
        <FormControl 
          type='search'
          placeholder={placeholder ?? 'Search for a gif'}
          aria-label="Search"
        />
      </Form>
      <Button className="searchButton">Search</Button>
    </div>
  )
}

export default Searchbar;
