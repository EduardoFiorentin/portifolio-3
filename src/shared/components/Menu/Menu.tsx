import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Menu = () => {

    const [visible, setVisible] = useState(true)

    return (
        
        visible && (
        <Box component={"nav"} position={"fixed"} sx={{backdropFilter: "blur(20px)"}} width={"100%"} display={"flex"} top={0} borderBottom={"1px solid white"} height={"40px"}>
            <Box width={"30%"}>
                
            </Box>
            <Box width={"40%"}>
                
            </Box>
            <Box display={"flex"} justifyContent={"space-around"} width={"30%"} paddingRight={"40px"}>
                <Button color="info" >
                    <Link to={"/"} style={{color: "white", textDecoration: "none"}}>Sobre</Link>
                </Button>
                <Button color="info">
                    <Link to={"/tech"} style={{color: "white", textDecoration: "none"}}>Tecnologias</Link>
                </Button>
                <Button color="info">
                    <Link to={"/experiences"} style={{color: "white", textDecoration: "none"}}>Experiências</Link>
                </Button>
                <Button color="info">
                    <Link to={"/projects"} style={{color: "white", textDecoration: "none"}}>Projetos</Link> 
                </Button>
            </Box>

        </Box>)
        
    )
}