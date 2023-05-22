import React, { useState } from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Dados from './Dados';
import Estatistica from './Estatistica';
import Formas from './Formas';
import Resumo from './Resumo';
import { useParams } from 'react-router';
import { useFetch } from '../hooks/useFetch';

function Detalhes({props}){
    const {id} = useParams();
    var {variavel, setVariavel} = useState();
    fetch("https://pokeapi.co/api/v2/pokemon/"+id)
    .then(result => result.json())
    .then(pokemon=>{console.log(pokemon);
    setVariavel(pokemon.data)})
    

    return (
        <Container>
            <h1>Página de detalhes de {id}</h1>
            <Row>
                <Col md={4}>
                    <Resumo pokemon={variavel == null ? {name: "eu"} : variavel} />
                </Col>
                <Col md={8}>
                    <Estatistica pokemon={variavel} />
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Formas pokemon={variavel} />
                </Col>
                <Col md={8}>
                    <Dados pokemon={variavel} />
                </Col>
            </Row>
        </Container>
    );
}

export default Detalhes;