import {createTheme} from "@mui/material"
import { cyan, yellow } from "@mui/material/colors"

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: yellow[700],      
            dark: yellow[800],
            light: yellow[500],
            contrastText: "#ffffff"  // cor que dá contraste com a main para textos
        }, 
        secondary: {
            main: cyan[700],
            dark: cyan[800],
            light: cyan[500],
            contrastText: "#ffffff"  // cor que dá contraste com a main para textos
        }, 
        background: {
            default: "#ffffff",      // cor de fundo 
            paper: "#f7f6f3"         // cor de dentro de cards
        }
    }
})