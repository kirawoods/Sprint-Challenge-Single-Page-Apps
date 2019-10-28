import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default function CharacterCard(props) {
  return (
    <Card className="character-card" key={props.id}>
      <CardImg src={props.image} alt={props.name}></CardImg>
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardText>Gender: {props.gender}</CardText>
        <CardText>Species: {props.species}</CardText>
        <CardText>Status: {props.status}</CardText>
      </CardBody>
    </Card>
  );
}
