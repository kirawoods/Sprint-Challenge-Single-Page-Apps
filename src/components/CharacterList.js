import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchForm from "./SearchForm";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const getCharacters = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          console.log(response);
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };
    getCharacters();
  }, []);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = event => {
    event.preventDefault();
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const filteringCharacters = characters.filter(x =>
      x.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCharacters(filteringCharacters);
  };

  return (
    <div>
      <br />
      <SearchForm
        search={searchTerm}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <hr></hr>
      <section className="character-list">
        {characters.map(character => {
          return (
            <CharacterCard
              key={character.id}
              name={character.name}
              image={character.image}
              gender={character.gender}
              species={character.species}
              status={character.status}
              origin={character.origin.name}
            />
          );
        })}
      </section>
    </div>
  );
}
