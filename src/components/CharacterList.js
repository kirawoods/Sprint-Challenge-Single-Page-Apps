import React, { useEffect, useState } from "react";
import axios from "axios";

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
  return (
    <section className="character-list">
      {characters.map(character => (
        <h2 key={character.id}>{character.name}</h2>
      ))}
    </section>
  );
}
