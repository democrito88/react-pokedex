import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { Badge, Card } from "react-bootstrap";


function Linhagem(props) {
    let parametro = new Object(props);
    let urlLinhagem = new Object(parametro.pokemon.species);
    let especie = useFetch(urlLinhagem.url);
    let evolutionChainUrl = new Object(new Object(especie.variavel).evolution_chain).url;
    let cadeiaEvolutiva = useFetch(evolutionChainUrl);  
    let cadeia = new Object(new Object(cadeiaEvolutiva.variavel).chain);
    let nome = [];
    nome[0] = new Object(cadeia.species).name;
    nome[1] = new Object(new Object(new Object(cadeia.evolves_to)[0]).species).name;
    
    setTimeout(console.log(nome[0], nome[1]), 5000);
    
    // let {especie, trabalhando} = useFetch(props.species.url);
    //let {cadeia, trabalhando2} = useFetch(especie.evolution_chain.url);
    return (
        <>
            {nome.map((pokemon, key) => {
                return(
                    <>
                        {key > 0 ? "  ->  " : ""}
                        <Badge>{pokemon}</Badge>
                    </>
                )
            })}
        </>
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