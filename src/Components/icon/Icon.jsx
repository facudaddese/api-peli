import React from 'react'

const Icon = ({ link, ref }) => {
    return (
        <div className="transition-transform duration-200 ease-in-out cursor-pointer hover:scale-[1.2]">
            <a href={link} target="_blank" rel="noopener noreferrer" className='no-underline text-(--color-blanco)'>
                <i className={ref}></i>
            </a>
        </div>
    )
}

export default Icon