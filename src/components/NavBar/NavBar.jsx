import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Box,
    Button,
    Flex,
    Heading,
    Center
  } from '@chakra-ui/react'
  import { IoMdMenu } from "react-icons/io";



const NavBar = () => {
  return (
    <Flex h={'10vh'} w={'100%'} justify={'space-between'} align={'center'} backgroundColor={'#5B2E48'}>
        <Heading fontSize={'x-large'}>Logo</Heading>
        <Menu>
            <MenuButton as={Button} rightIcon={<IoMdMenu />}>
                Menu
            </MenuButton>
            <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
        </Menu>
        <CartWidget/>
      
    </Flex>
  )
}

export default NavBar
