import { Box, Heading } from "@chakra-ui/react";
import ImgHeader from "../assets/fondo-inicio.jpg";
import ButtonCerrarSesion from "./ButtonCerrarSesion";

const Header = ({ titulo }) => {
    return (
        <Box
            as="header"
            backgroundImage={ImgHeader}
            backgroundPosition="center"
            backgroundSize="cover"
            height="25vh"
            width="100%"
        >
            <ButtonCerrarSesion />

            <Heading
                as="h1"
                color="color.blanco"
                position="absolute"
                left={{ base: "1.5rem", md: "9rem" }}
                top="5rem"
            >
                {titulo}
            </Heading>
        </Box>
    );
};

export default Header;
