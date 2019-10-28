import React from "react";

export default function SearchForm(props) {
  return (
    <section className="search-form">
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="search" className="search-label">
          Search by Name:{" "}
        </label>
        <input
          name="search"
          type="text"
          value={props.searchTerm}
          onChange={props.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
