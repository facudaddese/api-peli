import NavBar from '../navBar/NavBar'
import './Header.css'

const Header = ({ title, input, handleInput, onClick }) => {

    return (
        <header className='flex items-center py-6 px-8 gap-8'>
            <h1 onClick={onClick} className='font-["Lora",serif] text-(--color-rojo) text-[clamp(2rem,6vw,3.5rem)] tracking-[2px] cursor-pointer hover:text-(--color-blanco) selection:bg-(--color-rojo) selection:text-(--color-blanco) active:text-(--color-blanco)'>{title}</h1>
            <NavBar input={input} handleInput={handleInput} onClick={onClick} />
        </header>
    )
}

export default Header