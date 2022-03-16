import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        color: {
            blanco:'#FFFFFF',
            morado:'#3633D6',
            verde: '#62C97F',
            naranja: '#EB5757',
            negro: '#16191C',
            negroClaro: '#1E2126',
            gris: '#FFFFFF80',
            azul: '#1F47D3'

        }
    },
    fonts: {
        heading: 'Roboto, sans-serif',
        body: 'Roboto, sans-serif'
    }
})

export default theme