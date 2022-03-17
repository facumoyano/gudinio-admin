import { Button, FormControl, FormLabel, Input, Stack, Text, Image, Box } from '@chakra-ui/react'
import IconLoad from '../assets/icon-load.png'

const FormCargarProductos = () => {
  return (
    <FormControl display='flex' flexDirection='column' gap={5} paddingBottom={20} >
        <Stack flexDirection='row' alignItems='center' justifyContent='center'>
            <FormLabel htmlFor='titulo' fontWeight='700' paddingTop={3}>Título:</FormLabel>
            <Input type='text' id='titulo' placeholder='Indicar título del libro' border='none' backgroundColor='#F2F2F2' fontWeight='700' fontSize='sm' />
        </Stack>

        <Stack flexDirection='row' alignItems='center' justifyContent='center'>
            <FormLabel htmlFor='subtitulo' fontWeight='700' paddingTop={3}>Subtítulo:</FormLabel>
            <Input type='text' id='subtitulo' placeholder='Indicar título del libro' order='none' backgroundColor='#F2F2F2' fontWeight='700' fontSize='sm' />
        </Stack>

        <Stack flexDirection='row' alignItems='center' justifyContent='center'>
            <FormLabel htmlFor='titulo' fontWeight='700' paddingTop={3}>Autor/a:</FormLabel>
            <Input type='text' id='autor' placeholder='Indicar título del libro' order='none' backgroundColor='#F2F2F2' fontWeight='700' fontSize='sm' />
        </Stack>

        <Stack flexDirection='row' alignItems='center' justifyContent='center'>
            <FormLabel htmlFor='descripcion' fontWeight='700' paddingTop={3}>Descripción:</FormLabel>
            <Input type='text' id='descripcion' placeholder='Indicar título del libro' order='none' backgroundColor='#F2F2F2' fontWeight='700' fontSize='sm' />
        </Stack>

        <Stack flexDirection='row' alignItems='center' justifyContent='center'>
            <FormLabel htmlFor='precio' fontWeight='700' paddingTop={3}>Precio:</FormLabel>
            <Input type='numer' id='precio' placeholder='Indicar título del libro' order='none' backgroundColor='#F2F2F2' fontWeight='700' fontSize='sm' />
        </Stack>

        <Stack flexDirection='row' alignItems='center' justifyContent='center'>
            <FormLabel htmlFor='link' fontWeight='700' paddingTop={3}>Link:</FormLabel>
            <Input type='text' id='link' placeholder='Indicar título del libro' order='none' backgroundColor='#F2F2F2' fontWeight='700' fontSize='sm' />
        </Stack>
        <Stack flexDirection='row' alignItems='center' gap={5} justifyContent='center'>
            <Text fontWeight='700'>
                Adjuntar imágenes
            </Text>
            <Button backgroundColor='rgba(0, 0, 0, 0.25)' color='color.blanco'>
                <Image src={IconLoad} alt='icon load' />
                <Text marginLeft='1rem'>Subir archivos desde...</Text>
            </Button>
        </Stack>
        <Stack flexDirection='row' alignItems='center' justifyContent='center' gap={5}>
            <Box backgroundColor='#C4C4C4' width='173px' height='183px' display='flex' alignItems='center' justifyContent='center' color='color.blanco'>
                <Button variant='underline' border='4px' height='50px' width='50px' borderRadius='50px' fontWeight='700' fontSize='4xl' >
                    +
                </Button>
            </Box>

            <Box backgroundColor='#C4C4C4' width='173px' height='183px' display='flex' alignItems='center' justifyContent='center' color='color.blanco'>
                <Button variant='underline' border='4px' height='50px' width='50px' borderRadius='50px' fontWeight='700' fontSize='4xl' >
                    +
                </Button>
            </Box>

            <Box backgroundColor='#C4C4C4' width='173px' height='183px' display='flex' alignItems='center' justifyContent='center' color='color.blanco'>
                <Button variant='underline' border='4px' height='50px' width='50px' borderRadius='50px' fontWeight='700' fontSize='4xl' >
                    +
                </Button>
            </Box>
        </Stack>
        <Stack flexDirection='row' alignItems='center' justifyContent='center' gap={5}>
            <Button backgroundColor='color.verdeOscuro' color='color.blanco' mt='0.5rem' width='8rem'>
                Agregar
            </Button>
            <Button backgroundColor='color.rojoFuerte' color='color.blanco' mt='0' width='8rem'>
                Eliminar
            </Button>
        </Stack>
    </FormControl>
  )
}

export default FormCargarProductos