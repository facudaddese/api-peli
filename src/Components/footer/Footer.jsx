import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='iconos'>
                <div className="github">
                    <a href="https://github.com/facudaddese?tab=repositories" target="_blank" rel="noopener noreferrer" className='ancor-iconos'>
                        <i className="devicon-github-original git-link"></i>
                    </a>
                </div>
                <div className="linkedin">
                    <a href="https://www.linkedin.com/in/facundodaddese/" target="_blank" rel="noopener noreferrer" className='ancor-iconos'>
                        <i className="devicon-linkedin-plain git-link"></i>
                    </a>
                </div>
            </div>
            <p>&copy; 2026 Peliculas - API | Desarrollada por <a href="https://www.linkedin.com/in/facundodaddese/" target="_blank" rel="noopener noreferrer" className='ancor-footer'>Facundo D'addese.</a></p>
        </footer>
    )
}

export default Footer