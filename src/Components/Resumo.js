import React, { useEffect, useState } from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';

function Resumo({ pokemon }) {
    const [sprites, setSprites] = useState([]);
    const [types, setTypes] = useState([]);

    useEffect(() => {
        setSprites(sprites => Object.values(pokemon.sprites).filter(sprite => sprite != null));
        setTypes(types => Object.values(pokemon.types).map(type => type.type.name));
    }, []);

    return (
        pokemon ?
        <>
        <Carousel>
            {sprites.map((e, key) => {
                return(
                    <Carousel.Item key={key}>
                        <img
                            className="d-block w-100"
                            src={e}
                            alt="First slide"
                            />
                    </Carousel.Item>
                );
            })}
        </Carousel>
        <h1 className='text-center'>{pokemon.name}</h1>
        <Row className='d-flex flex-row justify-content-center gap-1'>
            {types.map(type =>
                <Col sm={2} key={type}>
                    <img src={"../../tipos/"+(type+'.webp')} width={40} alt={type} />
                </Col>
            )}
        </Row>
        </>
        :
        <p>Pokemon não encontrado</p>
    );
}

export default Resumo;