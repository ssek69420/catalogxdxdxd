// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaPedidos`
// dentro desse `<div>`.

import { useState } from "react";

export default function Home() {
  const [productsList, setProductsList] = useState([
    { id: 1, name: 'Anilha de 5kg', price: 'R$ 30,00' },
    { id: 2, name: 'Anilha de 10kg', price: 'R$ 50,00' },
    { id: 3, name: 'Anilha de 15kg', price: 'R$ 55,00' },
    { id: 4, name: 'Anilha de 500000000kg', price: 'Grátis' }
  ]);

  const [requestsList, setRequestsList] = useState([]);

  const adicionarItemPedidos = (produto) => {
    setRequestsList([...requestsList, produto]);
  };

  return (
    <div>
      <h1>Lista de Produtos 2</h1>
      {productsList.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}
