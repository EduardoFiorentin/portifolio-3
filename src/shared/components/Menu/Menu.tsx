import { Box, Button, Drawer, Icon, ListItem, ListItemButton, SvgIcon, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

export const Menu = () => {

    const [visible, setVisible] = useState(true)
        const theme = useTheme();
        const smDown = useMediaQuery(theme.breakpoints.down("sm"));

        const location = useLocation();

        useEffect(() => {
            setVisible(false);
        }, [location]);

    if(!smDown) return (
        <Box component={"nav"} position={"fixed"} sx={{backdropFilter: "blur(20px)"}} width={"100%"} display={"flex"} top={0} borderBottom={"1px solid white"} height={"40px"}>
            <Box display={"flex"} justifyContent={"flex-end"} paddingRight={"40px"} width={"100%"}>
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

        </Box>
    )

    else return (
        <>
            <Button onClick={() => setVisible(true)} sx={{position: "fixed", top: "5px", left: "0px"}}>   
                <SvgIcon>
                    <path fill="transparent" d="M0 0h24v24H0z" />
                    <path fill="white" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                </SvgIcon>
            </Button>
            { visible &&
                <Drawer open={visible}> 
                    <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-end"} paddingRight={"40px"} width={"100%"}>
                        <ListItemButton>
                            <Link to={"/"} style={{color: "white", textDecoration: "none"}}>
                                <Typography>Sobre</Typography>
                            </Link>
                        </ListItemButton>
                        <ListItemButton>
                            <Link to={"/tech"} style={{color: "white", textDecoration: "none"}}>
                                <Typography>Tecnologias</Typography>
                            </Link>
                        </ListItemButton>
                        <ListItemButton>
                            <Link to={"/experiences"} style={{color: "white", textDecoration: "none"}}>
                                <Typography>Experiências</Typography>
                            </Link>
                        </ListItemButton>
                        <ListItemButton>
                            <Link to={"/projects"} style={{color: "white", textDecoration: "none"}}>
                                <Typography>Projetos</Typography>
                            </Link>
                        </ListItemButton>
                    </Box>
                </Drawer>
            }
        </>
    )
}