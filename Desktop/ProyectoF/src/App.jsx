import { useEffect, useState } from 'react'
import Info from './components/productos'
import './app.css'

function App() {

const [productos, setProductos] = useState ([])
const [index, setIndex] = useState(1)
useEffect (() => {

  fetch(`https://fakestoreapi.com/products/${index}`)
  .then((response) => (response).json())
  .then((data) => {

    if (Object.keys(data).length === 0) {
      setProductos([]);
    } else {
      setProductos([data]);
    }
  })
  .catch((error) => console.error(error))
}, [index])

const handlePrev = () => {
  if (index > 1) {
    setIndex(index - 1);
  }
};

const handleNext = () => {
  if (index < 40) {
    setIndex(index + 1);
  }
};
  return (
    <>  
        <header> nav
        </header>
        <main>
        {
        productos.length > 0 ?
        productos.map((producto) => <Info key={producto.id}
        title={producto.title}
        price={producto.price}
        image={producto.image}
        category={producto.category}
       description={producto.description} 
   />)
          : <p> No hay resultado para su busqueda</p>
      }
        </main>
     <div>
      <button disabled={index <= 1} onClick={handlePrev}>◀</button>
      <button disabled={index >= 40} onClick={handleNext}>▶</button>
     </div>
    </>
  )
}

export default App
