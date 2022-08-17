import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="search">
      <form className="d-flex" role="search" id="search-form">
        <input
          className="form-control me-2 rounded-pill search-field"
          type="search"
          placeholder="Enter your city..."
          aria-label="Search"
        />
        <button
          className="btn btn-outline-secondary rounded-pill search-button"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}
