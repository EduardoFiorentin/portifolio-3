import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"

export const Menu = () => {

    const [visible, setVisible] = useState(true)

    return (
        
        visible && (
        <Box component={"nav"} position={"fixed"} sx={{backdropFilter: "blur(20px)"}} width={"100%"} display={"flex"} top={0} borderBottom={"1px solid white"}>
            <Box width={"30%"}>
                
            </Box>
            <Box width={"40%"}>
                
            </Box>
            <Box display={"flex"} justifyContent={"space-around"} width={"30%"} paddingRight={"40px"}>
                <Button color="info">
                    Sobre
                </Button>
                <Button color="info">
                    Tecnologias
                </Button>
                <Button color="info">
                    Experiências 
                </Button>
                <Button color="info">
                    Projetos 
                </Button>
            </Box>

        </Box>)
        
    )
}