import './MainLayout.css'
import { useRef } from 'react';
import { useStyle } from '../../hooks/useStyle';
import Item from '../item/Item';

const MainLayout = ({ input, containerRef, contenido, category }) => {

    const mainRef = useRef();
    useStyle(contenido, input, containerRef, mainRef);

    return (
        <main ref={mainRef}>
            <h2 className='main-title' style={{ display: category === null && "block" }}>{category === null || category === "PELISAPI" ? "Próximos estrenos" : category}</h2>

            <section className='grid-container'>
                {
                    contenido.map((peli) => <Item key={peli.id} {...peli} />)
                }
                {
                    contenido.length === 0 && input !== "" && <h3 className='empty-title'>No hay resultados para tu búsqueda</h3>
                }
            </section>
        </main >
    )
}

export default MainLayout