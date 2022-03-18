
import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, useDisclosure} from "@chakra-ui/react"




const ModalGuardarCambios = ({ isOpen, onOpen, onClose, button1}) => {

    
    const { isOpen: isSecondOpen , onOpen: onSecondOpen, onClose: onSecondClose } = useDisclosure()
  


  return (
      <>
    <Modal isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
        <ModalOverlay />
        <ModalContent display="flex" justify="center" alignItems='center'  height='30vh'>
            <ModalHeader mt='4rem'>
                {
                    button1 === 'Editar' ? ('¿Desea guardar los cambios?') : ('¿Desea agregar el producto?')
                }
            </ModalHeader>
            <ModalBody display='flex' gap={5} mt='4rem'>
                <Button backgroundColor='color.morado' color='color.blanco' onClick={() => {
                    onSecondOpen();
                    onClose();
                }}>
                    Aceptar
                </Button>
                <Button onClick={onClose} backgroundColor='color.rojoFuerte' color='color.blanco'>
                    Cancelar
                </Button>
            </ModalBody>
        </ModalContent>
    </Modal>

    
    <Modal isOpen={isSecondOpen} onClose={onSecondClose} >
                <ModalOverlay />
                <ModalContent display="flex" justify="center" alignItems='center'  height='30vh'>
                    <ModalHeader mt='4rem'>
                     {
                        button1 === 'Editar' ? ('¡Se han guardado los cambios con éxito!') : ('¡Se agregó con éxito!')
                     }
                    </ModalHeader>
                    <ModalBody display='flex' gap={5} mt='4rem'>
                        <Button onClick={onSecondClose} backgroundColor='#F09A35' color='color.blanco'>
                            Volver
                        </Button>
                    </ModalBody>
                </ModalContent>
            </Modal>
    
    </>
  )
}

export default ModalGuardarCambios