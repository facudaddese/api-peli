// import { Link } from 'react-router-dom'
import NavBar from '../navBar/NavBar'
import './Header.css'

const Header = ({ title, input, handleInput }) => {
    return (
        <header>
            <h1>{title}</h1>
            <NavBar input={input} handleInput={handleInput} />
        </header>
    )
}

export default Header