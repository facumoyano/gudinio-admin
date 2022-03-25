import { Box, Button, Heading, Stack, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import NavbarResponsive from "../components/NavbarResponsive";
import Tabla from "../components/Tabla";

const MisProductos = () => {
    const [esMenorA768] = useMediaQuery("(min-width: 768px)");

    return (
        <>
            <Header titulo="Mis productos" />

            <Box
                as="main"
                maxWidth="1200px"
                margin="0 auto"
                mt={{ base: "0px", md: "2rem" }}
            >
                <Stack
                    flexDirection="row"
                    justifyContent="space-between"
                    display={{ base: "none", md: "flex" }}
                >
                    <Heading
                        as="h2"
                        color="color.negro"
                        textAlign="center"
                        fontWeight="700"
                        fontSize="4xl"
                        marginLeft="25rem"
                    >
                        Lista de productos
                    </Heading>

                    <Button
                        variant="outline"
                        borderRadius="50%"
                        width="4rem"
                        height="4rem"
                        color="color.verdeOscuro"
                        fontSize="5xl"
                        colorScheme="color.verdeOscuro"
                        border="4px"
                        _hover={{ bg: "transparent" }}
                    >
                        +
                    </Button>
                </Stack>
                <Tabla />
                {!esMenorA768 && <NavbarResponsive />}
            </Box>
        </>
    );
};

export default MisProductos;
