import { useState, useEffect } from "react";

export const useFetch = (url) => {

    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        const getPeliculas = async () => {
            try {
                const res = await fetch(url)
                const data = await res.json()
                setPeliculas(data.results || []);
            } catch (error) {
                console.log(error);
            }
        }
        getPeliculas();
    }, [url]);

    return { peliculas }
}