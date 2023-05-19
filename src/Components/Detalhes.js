import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Dados from './Dados';
import Estatistica from './Estatistica';
import Formas from './Formas';
import Resumo from './Resumo';
import { useParams } from 'react-router';

function Detalhes({props}){
    const {id} = useParams();
    return (
        <Container>
            <h1>Página de detalhes de {id}</h1>
            <Row>
                <Col md={4}>
                    <Resumo pokemon={props} />
                </Col>
                <Col md={8}>
                    <Estatistica pokemon={props} />
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Formas pokemon={props} />
                </Col>
                <Col md={8}>
                    <Dados pokemon={props} />
                </Col>
            </Row>
        </Container>
    );
}

export default Detalhes;