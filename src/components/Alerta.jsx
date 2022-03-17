import { Box, Text } from '@chakra-ui/react'

const Alerta = () => {
  return (
    <Box backgroundColor='color.rojo' color='color.blanco' display='flex' alignItems='center' justifyContent='center' height='3.5rem' mb={5}>
        <Text fontWeight='700'>Usuario y/o contraseña incorrecta</Text>
    </Box>
  )
}

export default Alerta