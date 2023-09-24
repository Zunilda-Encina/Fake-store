fetch('https://fakestoreapi.com/products/7', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'Producto Modificado',
    price: 15.0,
    description: 'Nueva descripción del producto',
    image: '',
    category: 'Modificado',
  }),
})
  .then((res) => res.json())
  .then((json) => console.log('Producto modificado:', json));

fetch('https://fakestoreapi.com/products/7', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    price: 25.0,
    description: 'Descripción actualizada',
  }),
})
  .then((res) => res.json())
  .then((json) => console.log('Producto actualizado:', json));