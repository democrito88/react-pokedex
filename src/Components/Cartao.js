import React from 'react';
import { Button, Card } from "react-bootstrap";
import { useFetch } from "../hooks/useFetch.ts";
import { Link } from 'react-router-dom';

function Cartao({ props }) {
    console.log(props.url);
    const { variavel, trabalhando } = useFetch(props.url);

    return (
        <Card>
            {trabalhando && <p>Carregando...</p>}
            <Card.Img variant="top" src={variavel == null ? "" : variavel.sprites.front_default} />
            <Card.Body >
                <Card.Title className="text-center text-capitalize" >{variavel == null ? "" : variavel.name}</Card.Title>
                <Card.Text className="text-center">
                    <img src={"../../tipos/"+(variavel == null ? "" : variavel.types[0].type.name+'.webp')} width={40} alt="" />
                    {(variavel == null ? "" : variavel.types[1]) ? <img src={"../../tipos/"+(variavel == null ? "" : variavel.types[1].type.name+'.webp')} width={40} alt="" /> : ""}
                </Card.Text>
                <Link to="/Detalhes/1" >
                    <Button variant="primary">Detalhes</Button>
                </Link>
                
            </Card.Body>
        </Card>
    );
}

export default Cartao;