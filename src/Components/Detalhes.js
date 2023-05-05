import react from 'react';
import {Card, Col, Container, Row} from 'react-bootstrap';
import Dados from './Dados';
import Estatistica from './Estatistica';
import Formas from './Formas';
import Resumo from './Resumo';

function Detalhes({props}){
    return (
        <Container>
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