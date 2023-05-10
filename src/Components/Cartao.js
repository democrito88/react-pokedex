import { Button, Card } from "react-bootstrap";
import { useFetch } from "../hooks/useFetch.ts";

function Cartao({ props }) {

    const { variavel, trabalhando } = useFetch(props.url);

    return (
        
        <Card>
            {trabalhando && <p>Carregando...</p>}
            <Card.Img variant="top" src={variavel?.sprites.front_default} />
            <Card.Body >
                <Card.Title className="text-center text-capitalize" >{variavel?.name}</Card.Title>
                <Card.Text className="text-center">
                    <img src={"../../tipos/"+variavel?.types[0].type.name+'.webp'} width={40}/>
                    {(variavel?.types[1]) ? <img src={"../../tipos/"+variavel?.types[1]?.type.name+'.webp'} width={40}/> : ""}
                </Card.Text>
                <center><Button variant="primary" >Detalhes</Button></center>
            </Card.Body>
        </Card>
    );
}

export default Cartao;