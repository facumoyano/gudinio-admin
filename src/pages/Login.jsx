import { Box, Heading, Image, Stack } from "@chakra-ui/react";
import ImgHome from "../assets/fondo-inicio.jpg";
import Logo from "../assets/logo-2.jpg";
import Form from "../components/Form";

const Login = () => {
    return (
        <Box
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            height="100vh"
        >
            <Box
                backgroundImage={ImgHome}
                backgroundPosition="right"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                width={{ base: "100%", md: "60%" }}
                height={{ base: "40vh", md: "100vh" }}
            ></Box>
            <Box
                backgroundColor="color.negro"
                width={{ base: "100%", md: "40%" }}
                marginTop={0}
            >
                <Image
                    src={Logo}
                    alt="logo"
                    boxSize="90px"
                    borderRadius="50px"
                    position="absolute"
                    right="4rem"
                    top="2rem"
                    display={{ base: "none", md: "inline-block" }}
                />
                <Stack
                    flexDirection="column"
                    marginTop={{ base: "2rem", md: "11rem" }}
                >
                    <Heading
                        as="h1"
                        fontSize="4xl"
                        color="color.blanco"
                        textAlign="center"
                    >
                        Te damos la bienvenida
                    </Heading>
                    <Box padding="4rem">
                        <Form />
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
};

export default Login;
