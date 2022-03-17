import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import Alerta from "./Alerta";


const Form = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const [alerta, setAlerta] = useState(false)

  const {email, password} = user

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if(email || password === '') {
      setAlerta(true)
    }
    
  }

    return (
        <FormControl as="form" onSubmit={onSubmit}>
          {
            alerta && <Alerta />
          }
            <FormLabel
                htmlFor="email"
                color="color.gris"
                fontWeight="700"
                paddingLeft="1rem"
            >
                E-mail:
            </FormLabel>
            <Input
                id="email"
                type="email"
                placeholder="Ingrese su e-mail"
                border="none"
                backgroundColor="color.negroClaro"
                color="color.gris"
                fontWeight="400"
                height="4rem"
                name='email'
                value={email}
                onChange={handleInputChange}
            />

            <FormLabel
                htmlFor="email"
                color="color.gris"
                fontWeight="700"
                paddingLeft="1rem"
                mt="1.5rem"
            >
                Contraseña:
            </FormLabel>
            <Input
                id="password"
                type="password"
                placeholder="Ingrese su contraseña"
                border="none"
                backgroundColor="color.negroClaro"
                color="color.gris"
                fontWeight="400"
                height="4rem"
                mb="4rem"
                name='password'
                value={password}
                onChange={handleInputChange}
            />

            <Input
                type="submit"
                value="Iniciar sesión"
                backgroundColor="color.azul"
                border="none"
                color="color.blanco"
                fontWeight="700"
                height="4rem"
                cursor='pointer'
            />
        </FormControl>
    );
};

export default Form;
