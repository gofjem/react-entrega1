import React from 'react'
import { Box, Image,Text } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';

const ItemDetail = ({img,nombre,precio,stock}) => {

    const onAdd=(quantity)=>{
        toast(`Agregaste ${quantity} Producto(s) al carro`)
    }

  return (
    <Box>
        <Image 
        src={img}
        />
        nombre:{nombre}
        <Text>$ {precio}</Text>
        <ItemCount stock={stock} valorInicial={1} onAdd={onAdd}/>
        <ToastContainer/>
      
    </Box>
  )
}

export default ItemDetail
