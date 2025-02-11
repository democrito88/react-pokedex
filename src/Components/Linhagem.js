import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Badge } from "react-bootstrap";

function montaCadeia(cadeia, nome){
    nome.push(new Object(cadeia.species).name);

    let evolves_to = new Object(cadeia.evolves_to);
    
    if(evolves_to.length === 0){
        return nome;
    }

    for(let i = 0; i < evolves_to.length; i++){
        nome.concat(montaCadeia(evolves_to[i], nome));
    }

    return nome;
}

function Linhagem(props) {
    let parametro = new Object(props);
    let urlLinhagem = new Object(parametro.pokemon.species);
    let especie = useFetch(urlLinhagem.url);
    let evolutionChainUrl = new Object(new Object(especie.variavel).evolution_chain).url;
    let cadeiaEvolutiva = useFetch(evolutionChainUrl);  
    let cadeia = new Object(new Object(cadeiaEvolutiva.variavel).chain);
    let nome = [];
    console.log("cadeia:");
    console.log(montaCadeia(cadeia, nome));
    
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