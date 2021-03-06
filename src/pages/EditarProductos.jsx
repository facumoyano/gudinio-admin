import { Container, Heading, useMediaQuery } from "@chakra-ui/react";
import FormCargarProductos from "../components/FormCargarProductos";
import Header from "../components/Header";
import NavbarResponsive from "../components/NavbarResponsive";

const EditarProductos = () => {
    const [esMenorA768] = useMediaQuery("(min-width: 768px)");

    return (
        <>
            <Header titulo="Editar productos" />

            <Container maxW="container.md" margin="0 auto" mt={8}>
                <Heading as="h2" textAlign="center">
                    Editar productos
                </Heading>
                <FormCargarProductos button1="Editar" button2="Cancelar" />
            </Container>
            {!esMenorA768 && <NavbarResponsive />}
        </>
    );
};

export default EditarProductos;
