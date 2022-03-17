import { Box, Button, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header'
import Tabla from '../components/Tabla'

const MisProductos = () => {
  return (
    <>
        <Header titulo='Mis productos' />

        <Box as='main' maxWidth='1200px' margin='0 auto' mt='2rem'>
            <Stack flexDirection='row' justifyContent='space-between'  >
                
                    <Heading as='h2' color='color.negro' textAlign='center' fontWeight='700' fontSize='4xl' marginLeft='25rem' >
                        Lista de productos
                    </Heading>
                
                    <Button variant='outline' borderRadius='50%' width='4rem' height='4rem' color='color.verdeOscuro' fontSize='5xl' colorScheme='color.verdeOscuro'  border='4px'>
                        +
                    </Button>
                
            </Stack>
            <Tabla />
        </Box>
    </>
  )
}

export default MisProductos