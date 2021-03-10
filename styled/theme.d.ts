import 'styled-components';
interface Palette {
    main: string
    contrastText: string
}

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string
        typography: {
            family: {
                headings: string
                body: string
            },
            size: {
                xl: string
                l: string
                md: string
                sm: string
                xs: string
            }
        },
        palette: {
            common: {
                black: string
                white: string
            }
            primary: Palette
            secondary: Palette
        }
    }
}
