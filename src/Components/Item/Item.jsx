const Item = ({ title, poster_path, overview }) => {
    return (
        <div>
            <h2>{title}</h2>
            <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} />
            <p>{overview}</p>
        </div>
    )
}

export default Item