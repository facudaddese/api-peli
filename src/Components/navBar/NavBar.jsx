import './NavBar.css'

const NavBar = ({ input, handleInput, onClick }) => {

    const categories = [
        { id: 'movie', label: 'Películas' },
        { id: 'tv', label: 'Series' },
        { id: 'action', label: 'Acción' },
        { id: 'family', label: 'Familiar' },
        { id: 'adventure', label: 'Aventura' },
        { id: 'horror', label: 'Terror' },
        { id: 'comedy', label: 'Comedia' }
    ];

    return (
        <nav className='flex g-4 items-center justify-between flex-1 nav-bar'>
            <div className='btns-container'>
                {
                    categories.map((cat) => (
                        <button key={cat.id} onClick={onClick} className={`font-["Merriweather",serif] bg-(--color-negro) border-none cursor-pointer mr-4 text-(--color-rojo) text-[clamp(.9rem,2vw,1.1rem)] font-bold uppercase tracking-[1px] transition-transform duration-200 ease-in-out hover:text-(--color-blanco) hover:-translate-y-1 selection:bg-(--color-rojo) selection:text-(--color-blanco) ${cat.label.toLowerCase()} font-["Merriweather",serif] focus:text-(--color-blanco) focus:-translate-y-1`}>{cat.label}</button>
                    ))
                }
            </div>
            <div className='flex items-center justify-center gap-2 flex-1 search-container'>
                <input type="text" value={input} placeholder='Búsqueda de películas o series' onChange={handleInput} className='border-none [border-bottom:2px_solid_var(--color-rojo)] w-full p-2 bg-(--color-negro) font-bold text-(--color-blanco) focus:outline-none selection:bg-(--color-rojo) selection:text-(--color-blanco)' />
                <span className='material-symbols-outlined p-4 cursor-pointer text-(--color-rojo)'>search</span>
            </div>
        </nav>
    )
}

export default NavBar