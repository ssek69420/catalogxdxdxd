// Dentro do componente, crie a função `removerItemPedidos`.
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(listaAux);`

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

  const removeItems = (id) =>{
    let remove = false
    let auxList = productsList.filter((product) => {
      if (remove == false){
        if (product.id !== id){
          return product
        } else{
          remove = true
          return null
        }
      } else{
        return product
      }
    })
    setRequestsList(auxList)
  }

  return (
    <div>
      <h1>Feito no backend :x</h1>
    </div>
  )
}