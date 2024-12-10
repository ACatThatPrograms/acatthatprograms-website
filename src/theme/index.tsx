import { createTheme } from '@mui/material/styles'

// it could be your App.tsx file or theme file that is included in your tsconfig.json

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#477AC2',
        },
        secondary: {
            main: '#F8603A',
        },
        background: {
            default: '#FFF',
            paper: '#fefefe',
        },
        text: {
            primary: '#000',
            secondary: '#555',
        },
        divider: '#333333',
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#fefefe',
                },
            },
        }
    },

    typography: {
        fontFamily: '"Kanit", sans-serif',
    },
})

export default theme
