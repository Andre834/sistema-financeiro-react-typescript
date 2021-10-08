import { useState } from 'react'
import * as C from './App.styles'
import { Item } from './types/Item'
import { Category  } from './types/Category'
import { categorias } from './data/categorias'
import { items } from './data/items'

const App = () => {
  const [list, setList] = useState(items);
  const [currentMonth, setCurrentMonth] = useState()
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        {/*Áre de informações */}

        {/*Áre de inserção */}

        {/*Tabela de items */}


      </C.Body>
    </C.Container>
  )
}

export default App