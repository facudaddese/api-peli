const Item = ({ title, poster_path, overview }) => {
    return (
        <div className='flex shadow-[0px_0px_10px_0px_rgba(229,9,20,1)] overflow-hidden justify-between items-center p-4 flex-col flex-wrap text-(--color-gris) gap-4 text-center w-full hover:shadow-[0px_0px_22px_0px_rgba(229,9,20,1)]'>
            <h2 className='font-["Lora,serif"] text-[clamp(1.3rem,3vw,1.8rem)] py-3 px-1 selection:text-(--color-blanco) selection:bg-(--color-rojo)'>{title}</h2>
            <div className='flex justify-center items-center p-2'>
                <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} className='movie-img' />
            </div>
            <div className='flex justify-center items-start overflow-auto h-38 [scrollbar-width:thin] [scrollbar-color:#666_transparent]'>
                <p className='font-["Lora",serif] text-[clamp(0.9rem,1.5vw,1.1rem)] w-full py-4 px-1 selection:text-(--color-blanco) selection:bg-(--color-rojo)'>{overview}</p>
            </div>
        </div>
    )
}

export default Item