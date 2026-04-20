import { useRef } from 'react';
import { useStyle } from '../../hooks/useStyle';
import Item from '../item/Item';
import './MainLayout.css'

const MainLayout = ({ input, containerRef, contenido, category }) => {

    const mainRef = useRef();
    useStyle(contenido, input, containerRef, mainRef);

    return (
        <main ref={mainRef}>
            <h2 className='font-["Lora",serif] text-center text-(--color-rojo) p-4 text-[clamp(1.5rem,3.5vw,2rem)] uppercase tracking-[2px]' style={{ display: contenido.length > 0 ? "block" : 'none' }}>
                {
                    input !== '' ? "Resultados de tu búsqueda" : category === null || category === "PELISAPI" ? 'Próximos estrenos' : category !== "PELISAPI" ? category : ''
                }
            </h2>
            <section className='grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] my-9 mx-6 justify-center justify-items-center gap-9 grid-container'>
                {
                    contenido.map((peli) => <Item key={peli.id} {...peli} />)
                }
                {
                    contenido.length === 0 && <h3 className='font-["Merriweather",serif] text-(--color-rojo) text-[clamp(1.1rem,3.1vw,1.7rem)] uppercase tracking-[2px]'>No hay resultados para tu búsqueda</h3>
                }
            </section>
        </main >
    )
}

export default MainLayout