import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Text,
    Image,
    Box,
    useDisclosure,
    useMediaQuery,
} from "@chakra-ui/react";

import IconLoad from "../assets/icon-load.png";
import ModalGuardarCambios from "./modals/ModalGuardarCambios";

const FormCargarProductos = ({ button1, button2 }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [esMenorA768] = useMediaQuery("(min-width: 768px)");

    const handleClick = () => {
        onOpen();
    };

    return (
        <>
            <FormControl
                display="flex"
                flexDirection="column"
                gap={5}
                paddingBottom={10}
                pt={5}
            >
                <Stack
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                >
                    {esMenorA768 && (
                        <FormLabel
                            htmlFor="titulo"
                            fontWeight="700"
                            paddingTop={3}
                        >
                            Título:
                        </FormLabel>
                    )}
                    <Input
                        type="text"
                        id="titulo"
                        placeholder="Modificar título del libro"
                        border="none"
                        backgroundColor="#F2F2F2"
                        fontWeight="700"
                        fontSize="sm"
                    />
                </Stack>

                <Stack
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                >
                    {esMenorA768 && (
                        <FormLabel
                            htmlFor="subtitulo"
                            fontWeight="700"
                            paddingTop={3}
                        >
                            Subtítulo:
                        </FormLabel>
                    )}
                    <Input
                        type="text"
                        id="subtitulo"
                        placeholder="Modificar subtítulo del libro"
                        order="none"
                        backgroundColor="#F2F2F2"
                        fontWeight="700"
                        fontSize="sm"
                    />
                </Stack>

                <Stack
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                >
                    {esMenorA768 && (
                        <FormLabel
                            htmlFor="subtitulo"
                            fontWeight="700"
                            paddingTop={3}
                        >
                            Subtítulo:
                        </FormLabel>
                    )}
                    <Input
                        type="text"
                        id="autor"
                        placeholder="Modificar autor/a del libro"
                        order="none"
                        backgroundColor="#F2F2F2"
                        fontWeight="700"
                        fontSize="sm"
                    />
                </Stack>

                <Stack
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                >
                    {esMenorA768 && (
                        <FormLabel
                            htmlFor="descripcion"
                            fontWeight="700"
                            paddingTop={3}
                        >
                            Descripción:
                        </FormLabel>
                    )}
                    <Input
                        type="text"
                        id="descripcion"
                        placeholder="Modificar descripcion del libro"
                        order="none"
                        backgroundColor="#F2F2F2"
                        fontWeight="700"
                        fontSize="sm"
                    />
                </Stack>

                <Stack
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                >
                    {esMenorA768 && (
                        <FormLabel
                            htmlFor="precio"
                            fontWeight="700"
                            paddingTop={3}
                        >
                            Precio:
                        </FormLabel>
                    )}
                    <Input
                        type="numer"
                        id="precio"
                        placeholder="Modificar monto del libro"
                        order="none"
                        backgroundColor="#F2F2F2"
                        fontWeight="700"
                        fontSize="sm"
                    />
                </Stack>

                <Stack
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                >
                    {esMenorA768 && (
                        <FormLabel
                            htmlFor="precio"
                            fontWeight="700"
                            paddingTop={3}
                        >
                            Precio:
                        </FormLabel>
                    )}
                    <Input
                        type="text"
                        id="link"
                        placeholder="Modificar URL"
                        order="none"
                        backgroundColor="#F2F2F2"
                        fontWeight="700"
                        fontSize="sm"
                    />
                </Stack>
                <Stack
                    flexDirection="row"
                    alignItems="center"
                    gap={5}
                    justifyContent="center"
                >
                    {esMenorA768 && (
                        <Text fontWeight="700">Adjuntar imágenes</Text>
                    )}
                    <Button
                        backgroundColor="rgba(0, 0, 0, 0.25)"
                        color="color.blanco"
                        width="100%"
                    >
                        <Image src={IconLoad} alt="icon load" />
                        <Text marginLeft="1rem">Subir archivos desde...</Text>
                    </Button>
                </Stack>
                {esMenorA768 && (
                    <Stack
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="center"
                        gap={5}
                    >
                        <Box
                            backgroundColor="#C4C4C4"
                            width="173px"
                            height="183px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            color="color.blanco"
                        >
                            <Button
                                variant="underline"
                                border="4px"
                                height="50px"
                                width="50px"
                                borderRadius="50px"
                                fontWeight="700"
                                fontSize="4xl"
                            >
                                +
                            </Button>
                        </Box>

                        <Box
                            backgroundColor="#C4C4C4"
                            width="173px"
                            height="183px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            color="color.blanco"
                        >
                            <Button
                                variant="underline"
                                border="4px"
                                height="50px"
                                width="50px"
                                borderRadius="50px"
                                fontWeight="700"
                                fontSize="4xl"
                            >
                                +
                            </Button>
                        </Box>

                        <Box
                            backgroundColor="#C4C4C4"
                            width="173px"
                            height="183px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            color="color.blanco"
                        >
                            <Button
                                variant="underline"
                                border="4px"
                                height="50px"
                                width="50px"
                                borderRadius="50px"
                                fontWeight="700"
                                fontSize="4xl"
                            >
                                +
                            </Button>
                        </Box>
                    </Stack>
                )}
                <Stack
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                    gap={5}
                >
                    <Button
                        backgroundColor={
                            button1 === "Editar"
                                ? "color.morado"
                                : "color.verdeOscuro"
                        }
                        color="color.blanco"
                        mt="0.5rem"
                        width="8rem"
                        onClick={handleClick}
                    >
                        {button1}
                    </Button>
                    <Button
                        backgroundColor="color.rojoFuerte"
                        color="color.blanco"
                        mt="0"
                        width="8rem"
                    >
                        {button2}
                    </Button>
                </Stack>
            </FormControl>

            <ModalGuardarCambios
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                button1={button1}
                button2={button2}
            />
        </>
    );
};

export default FormCargarProductos;
