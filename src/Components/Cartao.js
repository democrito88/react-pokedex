import { Button, Card } from "react-bootstrap";
import { useFetch } from "../hooks/useFetch.ts";

function Cartao({ props }) {

    const especie = useFetch(props.url);

    return (
        <Card>
            <Card.Img variant="top" src={especie?.sprites.front_default} />
            <Card.Body >
                <Card.Title>{especie?.name}</Card.Title>
                <Card.Text>
                    {}
                </Card.Text>
                <Button variant="primary">Detalhes</Button>
            </Card.Body>
        </Card>
    );
}

export default Cartao;