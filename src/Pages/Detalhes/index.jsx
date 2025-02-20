import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Dados from '../../Components/Dados';
import Estatistica from '../../Components/Estatistica';
import Formas from '../../Components/Formas';
import Resumo from '../../Components/Resumo';
import Linhagem from'../../Components/Linhagem';
import { useParams } from 'react-router';
import { useFetch } from '../../hooks/useFetch';

function Detalhes(){
    const {id} = useParams();
    var [variavel, trabalhando] = useFetch("https://pokeapi.co/api/v2/pokemon/"+id);

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
                    <Estatistica stats={variavel == null ? {name: "eu"} : variavel.stats} />
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
                    <Linhagem url={variavel == null ? {name: "eu"} : variavel.species.url}  />
                </Col>
            </Row>
        </Container>
    );
}

export default Detalhes;