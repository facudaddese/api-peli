
import { useFetch } from '../../hooks/useFetch';
import { useInput } from '../../hooks/useInput';
import Item from '../Item/Item';
import './MainLayout.css'

const MainLayout = () => {

    const { input, handleInput } = useInput();
    const { peliculas } = useFetch(input);

    return (
        <main>
            <h1>Buscá tú película favorita</h1>
            <input type="text" value={input} placeholder='Ingrese una peliculas' onChange={handleInput} />
            <section>
                {
                    peliculas.map((peli) => <Item key={peli.id} {...peli} />)
                }
                {
                    peliculas.length === 0 && input !== "" && <h3> No se encontro la película</h3>
                }
            </section>
        </main >
    )
}

export default MainLayout