import IconContainer from "../iconContainer/IconContainer"

const Footer = () => {
    return (
        <footer className='flex justify-center items-center flex-col flex-wrap py-8 px-4 gap-8'>
            <IconContainer />
            <p className='text-(--color-blanco) text-center text-[clamp(.9rem,1.7vw,1rem)] selection:bg-(--color-rojo) selection:text-(--color-blanco)'>&copy; 2026 API de películas | Desarrollada por{' '}
                <a href="https://www.linkedin.com/in/facundodaddese/" target="_blank" rel="noopener noreferrer" className='text-(--color-rojo) no-underline font-bold hover:underline'>Facundo D'addese.</a>
            </p>
        </footer>
    )
}

export default Footer