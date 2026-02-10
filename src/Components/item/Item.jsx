import './Item.css'

const Item = ({ title, poster_path, overview }) => {
    return (
        <div className="card">
            <h2 className='movie-title'>{title}</h2>
            <div className="img-container">
                <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} className='movie-img' />
            </div>
            <div className="overview-container">
                <p className='overview'>{overview}</p>
            </div>
        </div>
    )
}

export default Item