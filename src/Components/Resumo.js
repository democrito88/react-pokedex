import React, { useEffect, useState } from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';

function Resumo({ pokemon }) {
    const [spritesOrdenadas, setSpritesOrdenadas] = useState([]);
    const [types, setTypes] = useState([]);

    useEffect(() => {
        if (!pokemon) return;

        const spriteOrder = [
            'front_default',
            'back_default',
            'front_female',
            'back_female',
            'front_shiny',
            'back_shiny',
            'front_shiny_female',
            'back_shiny_female'
        ];

        const spritesComOrdem = spriteOrder
            .map(key => pokemon.sprites[key])
            .filter(sprite => sprite !== null);

        setSpritesOrdenadas(spritesComOrdem);
        setTypes(pokemon.types.map(t => t.type.name));
    }, [pokemon]);

    return (
        pokemon ?
            <>
                <Carousel>
                    {spritesOrdenadas.length > 0 ? (
                        spritesOrdenadas.map((spriteUrl, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={spriteUrl}
                                    alt={`Sprite ${index}`}
                                    width={400}
                                />
                            </Carousel.Item>
                        ))
                    ) : (
                        <Carousel.Item key={0}>
                            <img
                                className="d-block w-100"
                                src={`https://fakeimg.pl/300x300?text=carregando...`}
                                alt='Carregando...'
                            />
                        </Carousel.Item>
                    )}
                </Carousel>

                <h1 className='text-center'>{pokemon.name}</h1>

                <Row className='d-flex flex-row justify-content-center gap-1'>
                    {types.map(type =>
                        <Col sm={2} key={type}>
                            <img src={`/tipos/${type}.webp`} width={40} alt={type} />
                        </Col>
                    )}
                </Row>
            </>
            :
            <p>Pokémon não encontrado</p>
    );
}

export default Resumo;
