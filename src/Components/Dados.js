import React, { useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

function Dados(props){
    const [dados, setDados] = useState({
        altura: 0,
        peso: 0
    });

   useEffect(() =>  {
        let altura = props.pokemon.height*2.54;
        let peso = props.pokemon.weight*0.45;

        setDados(dados => ({
            ...dados,
            altura: altura,
            peso: peso
        }));
    }, []);

    return(
        <>
        <Card>
            <Card.Body>
                <h3>Dados</h3>
                <ListGroup>
                    <ListGroup.Item>Altura: {dados.altura}cm</ListGroup.Item>
                    <ListGroup.Item>Peso: {dados.peso}Kg</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
        </>
    );
}

export default Dados;