import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';

function Resumo({ pokemon }) {

    let a = [];
    let tipos = [];
    Object.values(pokemon).forEach((prop, key) => {
        if (prop instanceof Object) {
            Object.values(prop).forEach(prop => {
                if (prop !== null && prop.length > 70) {
                    a.push(prop);
                }
            })
        }
        if(key === 16){
            Object.values(prop).forEach(prop => tipos.push(prop.type.name));
        }
    });

    return (
        <>
        <Carousel>
            {a.map(e => {
                return(
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={e}
                            alt="First slide"
                            />
                    </Carousel.Item>
                );
            })}
        </Carousel>
        <h1 className='text-center'>{pokemon == null ? pokemon.id : pokemon.name}</h1>
        <Row className='text-center'>
            <Col sm={2}>
                <img src={"../../tipos/"+(pokemon == null ? "" : tipos[0]+'.webp')} width={40} alt="" />
            </Col>
            <Col sm={2}>
                {(pokemon == null ? "" : tipos[1]) ? <img src={"../../tipos/"+(pokemon == null ? "" : tipos[1]+'.webp')} width={40} alt="" /> : ""}
            </Col>
        </Row>
        </>
    );
}

export default Resumo;