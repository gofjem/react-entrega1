import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Flex } from '@chakra-ui/react'


const ItemCount = ({stock,valorInicial,onAdd}) => {
    const [count,setCount]= useState(valorInicial)
    console.log(count);
    

    const incrementar=()=>{
       count < stock && setCount(count + 1)
    }

    const decrementar=()=>{
       count > valorInicial && setCount(count - 1)
    }
  return (
    <Flex>
        <Button colorScheme='blue'onClick={decrementar}>-</Button>
        {count}
        <Button colorScheme='blue'onClick={incrementar}>+</Button>
        <Button onClick={()=>onAdd(count)}>Agregar al Carro</Button>
      
    </Flex>
  )
}

export default ItemCount
