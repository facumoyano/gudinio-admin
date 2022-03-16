import { Box, Grid, Heading, Image, Stack } from "@chakra-ui/react"
import ImgHome from '../assets/fondo-inicio.jpg'
import Logo from '../assets/logo-2.jpg'
import Form from "../components/Form"


const Login = () => {
  return (
    <Grid templateColumns='60% 40%' height='100vh'>
        <Box backgroundImage={ImgHome} backgroundPosition='right' backgroundSize='cover' backgroundRepeat='no-repeat' width='100%'>

        </Box>
        <Box backgroundColor='color.negro'>
            <Image src={Logo} alt='logo' boxSize='90px' borderRadius='50px' position='absolute' right='4rem' top='2rem' />
            <Stack flexDirection='column' marginTop='11rem'>
                <Heading as='h1' fontSize='4xl' color='color.blanco' textAlign='center'>
                    Te damos la bienvenida
                </Heading>
                <Box padding='4rem'>
                    <Form />
                </Box>
            </Stack>
        </Box>
    </Grid>
  )
}

export default Login