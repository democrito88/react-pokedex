import { Button, Card } from "react-bootstrap";
import { useFetch } from "../hooks/useFetch.ts";
import { useNavigation } from '@react-navigation/native';

function Cartao({ props }) {
    const navigation = useNavigation();
    const { variavel, trabalhando } = useFetch(props.url);

    const handleDetalhes = () => {
        return navigation.navigate('Detalhes', {pokemon: variavel})
    }
    
    return (
        <Card>
            { trabalhando && <p>Carregando...</p>}
            <Card.Img variant="top" src={variavel?.sprites.front_default} />
            <Card.Body >
                <Card.Title>{variavel?.name}</Card.Title>
                <Card.Text>
                    {}
                </Card.Text>
                <Button variant="primary" onClick={handleDetalhes}>Detalhes</Button>
            </Card.Body>
        </Card>
    );
}

export default Cartao;