import './NavBar.css'

const NavBar = ({ input, handleInput }) => {
    return (
        <nav className="nav-bar">
            <div className="btns-container">
                <button className='pelicula'>Películas</button>
                <button className='serie'>Series</button>
                <button className='accion'>Acción</button>
                <button className='familiar'>Familiar</button>
                <button className='aventura'>Aventura</button>
                <button className='terror'>Terror</button>
                <button className='comedia'>Comedia</button>
            </div>
            <div className="search-container">
                <input type="text" value={input} placeholder='Búsqueda de películas o series' onChange={handleInput} className='input' />
                <span className="material-symbols-outlined search">search</span>
            </div>
        </nav>
    )
}

export default NavBar