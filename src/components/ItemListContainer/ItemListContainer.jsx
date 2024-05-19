import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'

const ItemListContainer = ({title}) => {
  return (
    <Flex justify={'center'} padding={3}>
      <Heading>{title}</Heading>
    </Flex>
  )
}

export default ItemListContainer
