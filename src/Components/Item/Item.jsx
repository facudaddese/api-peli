import './Item.css'

const Item = ({ title, poster_path, overview }) => {
    return (
        <div className="card">
            <h2 className='movie-title'>{title}</h2>
            <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} className='movie-img' />
            <p className='overview'>{overview}</p>
        </div>
    )
}

export default Item