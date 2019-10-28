import React from "react";

export default function SearchForm(props) {
  function refreshPage() {
    window.location.reload();
  }
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
        <button type="submit" onClick={refreshPage}>
          New Search{" "}
        </button>
      </form>
    </section>
  );
}
