import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

function Dados(props){
    //const [altura, setAltura] = useState();
    let dados = {
        altura: "",
        peso: ""
    }
    dados = Object.values(props.pokemon).map((propriedade, key) => {
        if(key === 4){
            dados.altura =  propriedade;
        }
        if(key === 17){
            dados.peso = propriedade;
        }
        return dados;
    });

    return(
        <>
        <Card>
            <Card.Body>
                <h3>Dados</h3>
                <ListGroup>
                    <ListGroup.Item>Height: {dados.altura}"</ListGroup.Item>
                    <ListGroup.Item>Weight: {dados.peso}lbs</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
        </>
    );
}

export default Dados;