import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Dados from './Dados';
import Estatistica from './Estatistica';
import Formas from './Formas';
import Resumo from './Resumo';
import { useParams } from 'react-router';
import { useFetch } from '../hooks/useFetch';
import Linhagem from'./Linhagem';

function Detalhes(){
    const {id} = useParams();
    var {variavel, trabalhando} = useFetch("https://pokeapi.co/api/v2/pokemon/"+id);
    
    return (
        trabalhando ? 
        <p>Carregando</p>
        :
        <Container>
            <Row>
                <Col sm={12} md={4} className='my-2'>
                    <Resumo pokemon={variavel == null ? {name: "eu"} : variavel} />
                </Col>
                <Col sm={12} md={8} className='my-2'>
                    <Estatistica pokemon={variavel == null ? {name: "eu"} : variavel} />
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={4} className='my-2'>
                    <Formas pokemon={variavel == null ? {name: "eu"} : variavel} />
                </Col>
                <Col sm={12} md={8} className='my-2'>
                    <Dados pokemon={variavel == null ? {name: "eu"} : variavel} />
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6} className='my-2'>
                    <Linhagem pokemon={variavel == null ? {name: "eu"} : variavel}  />
                </Col>
            </Row>
        </Container>
    );
}

export default Detalhes;