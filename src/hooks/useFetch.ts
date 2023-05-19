import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

export function useFetch<T = unknown>(url: string){
    const [variavel, setVariavel] = useState<T | null>(null);
    const [trabalhando, setTrabalhando] = useState(true);
    
    useEffect(() => {
        axios.get(url)
        .then((result) => {
            console.log("result: ");
            console.log(result.data);
            setVariavel(result.data);
        })
        .catch(error => console.log('error', error))
        .finally(() => {
            setTrabalhando(false);
        });
    }, [url]);

    return {variavel, trabalhando};
}