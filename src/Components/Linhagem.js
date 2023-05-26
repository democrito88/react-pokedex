import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { Card } from "react-bootstrap";


function Linhagem(props) {
    let parametro = new Object(props);
    let urlLinhagem = new Object(parametro.pokemon.species);

console.log(urlLinhagem.url);
    
    //  let {especie, trabalhando} = useFetch(props.species.url);
    //let {cadeia, trabalhando2} = useFetch(especie.evolution_chain.url);
    return (<h1>qualquercoisa</h1>
    )
}

export default Linhagem;


{/*
Object.values(props).forEach(
        elemento => {
            Object.values(elemento).forEach((propriedade, key) => {
                if(key == 13){

                    console.log(propriedade.url);
                }
            })
        }


    );
*/}