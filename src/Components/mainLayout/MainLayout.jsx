import { useFetch } from '../../hooks/useFetch';
import Item from '../item/Item';
import './MainLayout.css'

const MainLayout = ({ input }) => {

    const { peliculas } = useFetch(input ? `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${input}&language=es` : `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=es`);

    return (
        <main>
            <section className='grid-container'>
                {
                    peliculas.map((peli) => <Item key={peli.id} {...peli} />)

                }
                {
                    peliculas.length === 0 && input !== "" && <h3 className='empty'> No se encontro la película</h3>
                }
            </section>
        </main >
    )
}

export default MainLayout