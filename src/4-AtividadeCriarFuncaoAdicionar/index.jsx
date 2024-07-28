// Crie o estado `listaPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `objeto`.
// Dentro da função, utilize `setListaPedidos` para adicionar o `objeto` à `listaPedidos`.
// Exemplo: `setListaPedidos([...listaPedidos, objeto]);`

import { useState } from "react";

export default function AddRequestsLogic() {
  const [requestsList, setRequestsList] = useState([])

  const addRequestedItems = (obj) => {
    setRequestsList([...requestsList, obj])
  }

  return (
    <div>
      <h1>Lista de Pedidos</h1>
      <button onClick={() => addRequestedItems({ id: requestsList.length + 1, name: 'Novo Pedido', price: 'R$ 100,00' })}>
        Adicionar pedido
      </button>
      <div>
        {requestsList.map((request) => (
          <div key={request.id}>
            <h2>{request.name}</h2>
            <p>{request.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
