import { useEffect, useState } from 'react'
import Info from './components/productos'
import './app.css'

function App() {

const [productos, setProductos] = useState ([])

useEffect (() => {

  fetch('https://fakestoreapi.com/products')
  .then((response) => (response).json())
  .then((data) => setProductos(data))


  .catch((error) => console.error(error))
}, [])

  return (
    <>  
      <body>

        <header>NAV</header>
        <main>
        {
        productos.length > 0 ?
        productos.map((producto) => <Info key={producto.id}
        title={producto.title}
        price={producto.price}
        image={producto.image}
        category={producto.category}
        description={producto.description} />)
          : <p> No hay resultado para su busqueda</p>
      }
        </main>
      </body>
    </>
  )
}

export default App
