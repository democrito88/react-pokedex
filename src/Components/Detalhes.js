import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Dados from './Dados';
import Estatistica from './Estatistica';
import Formas from './Formas';
import Resumo from './Resumo';
import { useParams } from 'react-router';
import { useFetch } from '../hooks/useFetch';

function Detalhes({props}){
    const {id} = useParams();
    var {variavel, trabalhando} = useFetch("https://pokeapi.co/api/v2/pokemon/"+id);
    
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Resumo pokemon={variavel == null ? {name: "eu"} : variavel} />
                    <h1 className='text-center'>{variavel == null ? id : variavel.name}</h1>
                </Col>
                <Col md={8}>
                    <Estatistica pokemon={variavel == null ? {name: "eu"} : variavel} />
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