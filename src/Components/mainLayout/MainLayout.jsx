import { useRef } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useStyle } from '../../hooks/useStyle';
import Item from '../item/Item';
import './MainLayout.css'

const MainLayout = ({ input, containerRef }) => {

    const { peliculas } = useFetch(input ? `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${input}&language=es` : `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=es`);

    const mainRef = useRef();

    useStyle(peliculas, input, containerRef, mainRef);

    return (
        <main ref={mainRef}>
            <section className='grid-container'>
                {
                    peliculas.map((peli) => <Item key={peli.id} {...peli} />)
                }
                {
                    peliculas.length === 0 && input !== "" && <h3 className='empty'>No hay resultados para tu búsqueda</h3>
                }
            </section>
        </main >
    )
}

export default MainLayout