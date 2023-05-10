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
            {trabalhando && <p>Carregando...</p>}
            <Card.Img variant="top" src={variavel?.sprites.front_default} />
            <Card.Body >
                <Card.Title className="text-center text-capitalize" >{variavel?.name}</Card.Title>
                <Card.Text className="text-center">
                    <img src={"../../tipos/"+variavel?.types[0].type.name+'.webp'} width={40}/>
                    {(variavel?.types[1]) ? <img src={"../../tipos/"+variavel?.types[1]?.type.name+'.webp'} width={40}/> : ""}
                </Card.Text>
                <Button variant="primary" onClick={handleDetalhes}>Detalhes</Button>
            </Card.Body>
        </Card>
    );
}

export default Cartao;