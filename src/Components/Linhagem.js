import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Badge } from "react-bootstrap";
import axios from "axios";


function Linhagem(props) {
    let [especie, trabalhando] = useFetch(props.url);
    const [nome, setNome] = useState([]);

    function montaCadeia(cadeia){
        setNome(nome => [...nome, cadeia.species.name]);
        
        for(let i = 0; i < cadeia.evolves_to.length; i++){
            montaCadeia(cadeia.evolves_to[i])
        }
    }
    
    useEffect(() => {
        if(!trabalhando){
            axios.get(especie.evolution_chain.url)
            .then(resposta => resposta.data)
            .then(cadeiaEvolutiva => {
                montaCadeia(cadeiaEvolutiva.chain)
            })
            .catch(error => console.error(error));
        }
    }, [trabalhando]);

    return (
        trabalhando ?
        <p>Este pokemon não evolui</p>
        :
        <div className="d-flex flex-row flex-wrap gap-2">
            {nome.map((pokemon, key) => {
                return(
                    <div key={key}>
                        {key > 0 ? "  ->  " : ""}
                        <Badge>{pokemon}</Badge>
                    </div>
                )
            })}
        </div>
    )
}

export default Linhagem;