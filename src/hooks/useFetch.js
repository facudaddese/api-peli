import { useState, useEffect } from "react";

export const useFetch = (url) => {

    const [contenido, setContenido] = useState([]);

    useEffect(() => {
        const getContenido = async () => {
            try {
                const res = await fetch(url)
                const data = await res.json()
                setContenido(data.results || []);
            } catch (error) {
                console.log(error);
            }
        }
        getContenido();
    }, [url]);

    return { contenido }
}