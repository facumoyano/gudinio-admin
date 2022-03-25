import { Box, Button, Heading, Stack } from "@chakra-ui/react";
import ImgHome from "../assets/fondo-inicio.jpg";

const Home = () => {
    return (
        <Box
            backgroundImage={ImgHome}
            backgroundPosition={{ base: "right", md: "center" }}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            height="100vh"
        >
            <Button
                position="absolute"
                right="2rem"
                top="2rem"
                backgroundColor="color.naranja"
                color="color.blanco"
                borderRadius="20px"
                border="none"
                fontSize="md"
                fontWeight="700"
                _hover={{ bg: "transparent" }}
                display={{ base: "none", md: "inline-block" }}
            >
                Cerrar sesión
            </Button>
            <Stack
                flexDirection="column"
                alignItems={{ base: "center", md: "flex-start" }}
                justifyContent="center"
                pt="5rem"
                pl={{ base: "0", md: "10rem" }}
                width="100%"
            >
                <Heading
                    as="h1"
                    fontSize={{ base: "3xl", md: "4xl" }}
                    color="color.blanco"
                    textAlign="center"
                >
                    Te damos la bienvenida <br />
                    ¿En qué te podemos ayudar hoy?
                </Heading>
                <Stack
                    flexDirection="column"
                    pt={{ base: "16rem", md: "10rem" }}
                    justifyContent="center"
                    alignItems={{ base: "center", md: "flex-start" }}
                    gap="2rem"
                    width="60%"
                >
                    <Button
                        backgroundColor="color.morado"
                        color="color.blanco"
                        width={{ base: "100%", md: "60%" }}
                        height="4rem"
                        fontWeight="700"
                        fontSize={{ base: "lg", md: "xl" }}
                        borderRadius="10px"
                    >
                        Editar productos
                    </Button>
                    <Button
                        backgroundColor="color.verde"
                        color="color.blanco"
                        width={{ base: "100%", md: "60%" }}
                        height="4rem"
                        fontWeight="700"
                        fontSize={{ base: "lg", md: "xl" }}
                        borderRadius="10px"
                    >
                        Agregar productos
                    </Button>

                    <Button
                        backgroundColor="color.naranja"
                        color="color.blanco"
                        borderRadius="20px"
                        border="none"
                        fontSize="md"
                        fontWeight="700"
                        _hover={{ bg: "transparent" }}
                        display={{ base: "inline-block", md: "none" }}
                    >
                        Cerrar sesión
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Home;
