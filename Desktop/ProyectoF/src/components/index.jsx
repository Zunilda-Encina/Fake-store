import { useEffect, useState } from 'react';
import Info from './productos';
import Nav from './nav';
import Footer from './footer';
import './index.css';

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
  if (index < 5) {
    setIndex(index + 1);
  }
};
  return (
    <> 
      <Nav />
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
      <button disabled={index >= 5} onClick={handleNext}>▶</button>
     </div>
     <Footer />
    </>
  )
}

export default App;

