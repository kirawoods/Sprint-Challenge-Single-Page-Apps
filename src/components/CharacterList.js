import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

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
        <Card className="character-card" key={character.id}>
          <CardImg src={character.image} alt={character.name}></CardImg>
          <CardBody>
            <CardTitle>{character.name}</CardTitle>
            <CardText>Gender: {character.gender}</CardText>
            <CardText>Species: {character.species}</CardText>
            <CardText>Status: {character.status}</CardText>
          </CardBody>
        </Card>
      ))}
    </section>
  );
}
