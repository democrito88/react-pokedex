import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useState, useEffect } from 'react';
import Cartao from "../../Components/Cartao";

function Home() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {

        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151", requestOptions)
            .then(response => response.text())
            .then(result => setPokemons(JSON.parse(result).results))
            .catch(error => console.log('error', error));
    },
        []);

    return (
        <Container>
            <Row>
                {pokemons.map((pokemon, indice) => 
                    <Col className='mb-3' sm={3} key={indice}>
                        <Cartao props={pokemon} />
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default Home;