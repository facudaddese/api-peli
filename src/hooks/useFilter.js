import { useFetch } from "./useFetch"
import { useState } from "react"

export const useFilter = ({ input }) => {

    const [category, setCategory] = useState(null);

    const handleCategory = ({ target }) => {
        setCategory(target.textContent);
    }

    const { contenido } = useFetch(
        input ? `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${input}&language=es` :
            category === 'Películas' ? `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}&language=es` :
                category === 'Series' ? `https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_API_KEY}&language=es` :
                    category === 'Acción' ? `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=28&language=es` :
                        category === 'Familiar' ? `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=10751&language=es` :
                            category === 'Aventura' ? `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=12&language=es` :
                                category === 'Terror' ? `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=27&language=es` :
                                    category === 'Comedia' ? `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=35&language=es` :
                                        `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}&language=es`
    );

    return { handleCategory, contenido, category }
}
