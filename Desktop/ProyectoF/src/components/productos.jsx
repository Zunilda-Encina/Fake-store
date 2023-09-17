import React from 'react'
import './productos.css'

const info = ({title, price, category, description, image}) =>{
     {
        return (
          <div className='card'>
                <img className='card_img' src={image} alt='Imagenes de los productos'/>
              <div className='card_data'>
                <h2 className='box'>{title}</h2>
                <h3 className='box'>{price}</h3>
                <h2 className='box'>{category}</h2>
                <p className='box'>{description}</p>
              </div>
          </div>
        )
      }
}

export default info;