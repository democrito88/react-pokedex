import React, { useContext } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Cartao from "../../Components/Cartao";
import { PokemonContext } from "../../contexts/PokemonContext";

function Home() {
    const { pokemonList, loadingList } = useContext(PokemonContext);

    if (loadingList) return <p>Carregando Pokémons...</p>;

    return (
        <Container>
            <Row>
                {pokemonList.map((pokemon, indice) => 
                    <Col className='mb-3' sm={3} key={indice}>
                        <Cartao props={pokemon} />
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default Home;