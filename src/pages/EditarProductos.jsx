import { Container, Heading } from "@chakra-ui/react"
import FormCargarProductos from "../components/FormCargarProductos"
import Header from "../components/Header"



const EditarProductos = () => {
  return (
    <>
        <Header titulo='Editar productos' />
        <Container maxW='container.md' margin='0 auto' mt={8}>
            <Heading as='h2' textAlign='center'>
                Editar productos
            </Heading>
            <FormCargarProductos button1='Editar' button2='Cancelar'  />
          </Container>
    </>
  )
}

export default EditarProductos