import React, { useState } from 'react'
import './productos.css'

const info = ({title, price, category, description, image}) =>{
  const [Description, setDescription] = useState(false);

  const toggleDescription = () => {
    setDescription(!Description);
  };
  const hideDescription = () => {
    setDescription(false);
  };
     {
        return (
          <div className='card'>
                <img className='card_img' src={image} alt='{title}'/>
              <div className='card_data'>
                <h2 className='box'>{title}</h2>
                <h3 className='box'>{price}</h3>
                <h2 className='box'>{category}</h2>
                {Description ? ( <><p>{description}</p>
            <button onClick={hideDescription}>Ver menos</button>  </> ) : 
            ( <button onClick={toggleDescription}>Más Info</button> )}
              </div>
          </div>
        )
      }
}

export default info;