import React from "react";
import "./Search.styles.css";

const Search = ({ className, placeholder,defaultValue, onChangeHandler }) => (
  <input
    className={`search ${className}`}
    type="search..."
    placeholder={placeholder}
    defaultValue={defaultValue}
    onChange={onChangeHandler}
  />
);

export default Search;
