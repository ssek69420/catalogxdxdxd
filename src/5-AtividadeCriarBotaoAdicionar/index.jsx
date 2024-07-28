// Para cada objeto renderizado, adicione um botão.
// Utilize o atributo onClick para o botão.
// No valor do onClick, passe a função adicionarItemPedidos, 
// por exemplo: onClick={() => adicionarItemPedidos(produto)}
// No conteúdo do botão, coloque o texto "Selecionar" ou algo semelhante.

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
      <h1>Lista de Produtos</h1>
      <div>
        {productsList.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button onClick={() => adicionarItemPedidos(product)}>Selecionar</button>
          </div>
        ))}
      </div>
      <h2>Pedidos Selecionados</h2>
      <div>
        {requestsList.map((request, index) => (
          <div key={index}>
            <h2>{request.name}</h2>
            <p>{request.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
