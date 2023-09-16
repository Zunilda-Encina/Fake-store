import React from 'react'
import './productos.css'

const info = ({title, price, category, description, image}) =>{
     {
        return (
          <div className='card'>
              <div className='card_img'>
                <img src={image} alt=''/>
              </div>
              <div className='card_data'>
                <h2>{title}</h2>
                <h3>{price}</h3>
                <h2>{category}</h2>
                <p>{description}</p>
              </div>
          </div>
        )
      }
}

export default info;