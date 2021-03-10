import { DefaultTheme } from 'styled-components'
export const defaultTheme: DefaultTheme = {
    borderRadius: '4px',
    typography: {
        family: {
            headings: 'Baskervville',
            body: 'Nunito Sans'
        },
        size: {
            xl: '88px',
            l: '32px',
            md: '16px',
            sm: '14px',
            xs: '8px',
        }
    },
    palette: {
        common: {
            black: '#222831',
            white: '#ffffff'
        },
        primary: {
            main: '#726a95',
            contrastText: '#1b1b1b'
        },
        secondary: {
            main: '#709fb0',
            contrastText: '#ffffff'
        }
    }
}
