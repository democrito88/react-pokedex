import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch<T = unknown>(url){
    const [variavel, setVariavel] = useState<T | null>(null);
    
    useEffect(() => {
        axios.get(url)
        .then((result) => {
            setVariavel(result.data);
        })
        .catch(error => console.log('error', error));
    }, [url]);

    return variavel;
}