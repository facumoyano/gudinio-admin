import { Box, Button, Heading, Stack } from "@chakra-ui/react"
import ImgHome from '../assets/fondo-inicio.jpg'


const Home = () => {
  return (
    <Box 
        backgroundImage={ImgHome}
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        height='100vh'    
    >
        <Button position='absolute' right='2rem' top='2rem' backgroundColor='color.naranja' color='color.blanco' borderRadius='20px' border='none' fontSize='md' fontWeight='700'>
            Cerrar sesión
        </Button>
        <Stack flexDirection='column' width='700px' pt='10rem' pl='5rem'>
            <Heading as='h1' fontSize='4xl' color='color.blanco' textAlign='center'>
                Te damos la bienvenida <br/>
                ¿En qué te podemos ayudar hoy?
            </Heading>
            <Stack flexDirection='column' pt='10rem' justifyContent='center' alignItems='center' gap='2rem'>
                <Button backgroundColor='color.morado' color='color.blanco' width='60%' height='4rem' fontWeight='700' fontSize='xl' borderRadius='10px' >Editar productos</Button>
                <Button backgroundColor='color.verde' color='color.blanco' width='60%' height='4rem' fontWeight='700' fontSize='xl' borderRadius='10px' >Agregar productos</Button>
            </Stack>    
        </Stack>
    </Box>
  )
}

export default Home