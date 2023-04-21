import React from "react";
import { Button, Card } from "react-bootstrap";

function Cartao(props) {
    return (
        <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{props.pokemon.name}</Card.Title>
                <Card.Text>
                    {props.pokemon.url}
                </Card.Text>
                <Button variant="primary">Detalhes</Button>
            </Card.Body>
        </Card>
    );
}

export default Cartao;