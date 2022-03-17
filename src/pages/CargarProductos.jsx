import { Container, Heading } from "@chakra-ui/react"
import FormCargarProductos from "../components/FormCargarProductos"
import Header from "../components/Header"


const CargarProductos = () => {
  return (
    <>
          <Header titulo='Cargar productos' />
          <Container maxW='container.md' margin='0 auto' mt={8}>
            <Heading as='h2' textAlign='center'>
                Alta productos
            </Heading>
            <FormCargarProductos />
          </Container>
    </>
  )
}

export default CargarProductos