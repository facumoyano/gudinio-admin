import { FormControl, FormLabel, Input } from "@chakra-ui/react"


const Form = () => {
  return (
    <FormControl as='form' >
        
        <FormLabel htmlFor='email' color='color.gris' fontWeight='700' paddingLeft='1rem' >
            E-mail:
        </FormLabel>
        <Input id='email' type='email' placeholder='Ingrese su e-mail' border='none' backgroundColor='color.negroClaro' color='color.gris' fontWeight='400' height='4rem' />

        <FormLabel htmlFor='email'  color='color.gris' fontWeight='700' paddingLeft='1rem' mt='1.5rem'>
            Contraseña:
        </FormLabel>
        <Input id='password' type='password' placeholder='Ingrese su contraseña' border='none' backgroundColor='color.negroClaro' color='color.gris' fontWeight='400' height='4rem' mb='4rem' />
        
        <Input type='submit' value='Iniciar sesión' backgroundColor='color.azul' border='none' color='color.blanco' fontWeight='700' height='4rem'/>
        
    </FormControl>
  )
}

export default Form