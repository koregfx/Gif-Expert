import React from 'react'

function GifGridItem( {title, id ,url }) {

    return (
        <div className='card animate__animated animate__fadeInDown'>
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem
