import './MainLayout.css'
import { useRef } from 'react';
import { useStyle } from '../../hooks/useStyle';
import Item from '../item/Item';

const MainLayout = ({ input, containerRef, contenido }) => {

    const mainRef = useRef();
    useStyle(contenido, input, containerRef, mainRef);

    return (
        <main ref={mainRef}>
            {
                // contenido.length !== 0 && input === "" && <h2 className='main-title'> Próximos estrenos</h2>
            }
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