import { Button, Card } from "react-bootstrap";
import { useFetch } from "../hooks/useFetch.ts";

function Cartao({ props }) {

    const { variavel, trabalhando } = useFetch(props.url);
    
    return (
        <Card>
            { trabalhando && <p>Carregando...</p>}
            <Card.Img variant="top" src={variavel?.sprites.front_default} />
            <Card.Body >
                <Card.Title>{variavel?.name}</Card.Title>
                <Card.Text>
                    {}
                </Card.Text>
                <Button variant="primary">Detalhes</Button>
            </Card.Body>
        </Card>
    );
}

export default Cartao;