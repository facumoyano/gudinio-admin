import { Button, Table, Tbody, Td, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react"
import productos from "../data/productos"
import ModalEliminarProductos from "./modals/ModalEliminarProductos"

const Tabla = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
      <>
    <Table  colorScheme='color.rojo' marginTop='2rem' >
        <Thead height='3rem'>
            <Tr backgroundColor='color.negro'>
                <Th color='color.blanco' fontSize="xl" textTransform='capitalize'>Código</Th>
                <Th color='color.blanco' fontSize="xl" textTransform='capitalize'>Título</Th>
                <Th color='color.blanco' fontSize="xl" textTransform='capitalize'>Autor</Th>
                <Th color='color.blanco' fontSize="xl" textTransform='capitalize'>Descripción</Th>
                <Th color='color.blanco' fontSize="xl" textTransform='capitalize'>{' '} </Th>
            </Tr>
        </Thead>
        <Tbody fontWeight='700'>
            {
                productos.map( producto => (
                    <Tr key={producto.id}>
                        <Td>{producto.id}</Td>
                        <Td>{producto.titulo}</Td>
                        <Td>{producto.autor}</Td>
                        <Td>{producto.descripcion}</Td>
                        <Td display='flex' justifyContent='flex-end'>
                            <Button backgroundColor='color.morado' color='color.blanco' marginRight='3rem' borderRadius='10px'>Editar</Button>
                            <Button backgroundColor='color.rojoFuerte' color='color.blanco' borderRadius='10px' onClick={onOpen}>Eliminar</Button>
                        </Td>  
                    </Tr>
                ))
            }
        </Tbody>
    </Table>
    <ModalEliminarProductos isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </>
  )
}

export default Tabla