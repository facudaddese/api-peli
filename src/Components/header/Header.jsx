import './Header.css'
import NavBar from '../navBar/NavBar'

const Header = ({ title, input, handleInput, onClick }) => {

    return (
        <header>
            <button className='btn-h1' onClick={onClick}><h1>{title}</h1></button>
            <NavBar input={input} handleInput={handleInput} onClick={onClick} />
        </header>
    )
}

export default Header