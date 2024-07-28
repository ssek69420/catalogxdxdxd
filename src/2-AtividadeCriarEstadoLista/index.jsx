// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

import { useState } from "react";

export default function Home() {
  const [productsList, setProductsList] = useState([
    { id: 1, name: 'Anilha de 5kg', price: 'R$ 30,00' },
    { id: 2, name: 'Anilha de 10kg', price: 'R$ 50,00' },
    { id: 3, name: 'Anilha de 15kg', price: 'R$ 55,00' },
    { id: 4, name: 'Anilha de 500000000kg', price: 'Grátis' }
  ]);

  return (
    <div>
      <h1>Feito no backend :)</h1>
    </div>
  );
}