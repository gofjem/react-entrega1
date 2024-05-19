import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'


function App() {

  return (
  <ChakraProvider>
    <NavBar/>
    <ItemListContainer title='Lo quieres, Lo tienes'/>

  </ChakraProvider>
  )
}

export default App

// 1:43
//1:15