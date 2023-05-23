import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

function Resumo({ pokemon }) {

    let a = [];
    Object.values(pokemon).forEach((prop) => {
        if (prop instanceof Object) {
            Object.values(prop).forEach(prop => {
                if (prop !== null && prop.length > 70) {
                    a.push(prop);
                }
            })
        }
    });

    return (
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
    );
}

export default Resumo;