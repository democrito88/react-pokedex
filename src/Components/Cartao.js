import { Button, Card } from "react-bootstrap";
import { useState, useEffect } from 'react';



function Cartao({ props }) {

    const [especie, setEspecie] = useState({});

    function fetchData() {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };


        fetch(props[0].url, requestOptions)

            .then(response => response.text())
            .then((result) => {

                let resultado = JSON.parse(result);
                setEspecie(async (resultado) => { return resultado});


            }
            )
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Card key={props[1]}>
            <Card.Img variant="top" />
            <Card.Body >
                <Card.Title></Card.Title>
                <Card.Text>
                    {especie.forms[0].name}
                </Card.Text>
                <Button variant="primary">Detalhes</Button>
            </Card.Body>
        </Card>
    );
}

export default Cartao;