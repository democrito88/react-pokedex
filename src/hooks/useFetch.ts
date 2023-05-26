import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch<T = unknown>(url: string){
    const [variavel, setVariavel] = useState<T | null>(null);
    const [trabalhando, setTrabalhando] =  useState(true);
    const [cadeia, setCadeia] = useState(true);
    const [trabalhando2, setTrabalhando2] =  useState(true);
    
    useEffect(() => {
        axios.get(url)
        .then(result => {
            setVariavel(result.data);
        })
        .catch(error => console.log('error', error))
        .finally(() => {
            setTrabalhando(false);
        });

    }, [url]);
    
    return {variavel, trabalhando};
}
