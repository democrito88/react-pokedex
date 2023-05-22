import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch<T = unknown>(id: string){
    const [variavel, setVariavel] = useState<T | null>(null);
    const [trabalhando, setTrabalhando] =  useState(true);
    
    useEffect(() => {
        {/*axios.get(url)
        .then(result => {
            setVariavel(result.data);
            setTimeout(() => {}, 10000)})
        .catch(error => console.log('error', error))
        .finally(() => {
            setTrabalhando(false);
        });*/}
        fetch("https://pokeapi.co/api/v2/pokemon/"+id)
        .then(response => response.json())
        .then(obj => {
            console.log(obj);
            setVariavel(obj.data)})
        .catch(error => console.log(error))
        .finally(() => setTrabalhando(false))

    }, [id]);
    
    return {variavel, trabalhando};
}
