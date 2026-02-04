import { useState, useEffect } from "react";

export const useFetch = (input) => {

    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        const getPeliculas = async () => {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${input}&language=es`)
                const data = await res.json()
                setPeliculas(data.results || []);
            } catch (error) {
                console.log(error);
            }
        }
        getPeliculas();
    }, [input]);

    return { peliculas }
}