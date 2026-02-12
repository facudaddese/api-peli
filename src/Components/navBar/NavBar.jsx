import { NavLink } from 'react-router-dom';
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
        <nav className="nav-bar">
            <div className="btns-container">
                {
                    categories.map((cat) => (
                        <button key={cat.id} onClick={onClick} className={`${cat.label.toLowerCase()}`}>{cat.label}</button>
                    ))
                }
            </div>
            <div className="search-container">
                <input type="text" value={input} placeholder='Búsqueda de películas o series' onChange={handleInput} className='input' />
                <span className="material-symbols-outlined search">search</span>
            </div>
        </nav>
    )
}

export default NavBar