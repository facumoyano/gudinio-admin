import { Container, Heading, useMediaQuery } from "@chakra-ui/react";
import FormCargarProductos from "../components/FormCargarProductos";
import Header from "../components/Header";
import NavbarResponsive from "../components/NavbarResponsive";

const CargarProductos = () => {
    const [esMenorA768] = useMediaQuery("(min-width: 768px)");

    return (
        <>
            <Header titulo="Cargar productos" />
            <Container maxW="container.md" margin="0 auto" mt={8}>
                <Heading as="h2" textAlign="center">
                    Alta productos
                </Heading>
                <FormCargarProductos button1="Agregar" button2="Eliminar" />
            </Container>
            {!esMenorA768 && <NavbarResponsive />}
        </>
    );
};

export default CargarProductos;
