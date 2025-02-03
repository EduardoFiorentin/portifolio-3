import { Box, Button, Typography } from "@mui/material"
import { Header } from "../../shared/components/Header/Header"
import { PageBase } from "../../shared/layouts/PageBase/PageBase"
import image from "../../assets/img/foto_perfil.jpg"
import { Menu } from "../../shared/components/Menu/Menu"
import { GitHub, LinkedIn, Scale } from "@mui/icons-material"
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import { IconBox } from "../../shared/components/IconBox/IconBox"

const Presentation2 = () => {
    return (
        <Box sx={{
            overflowX: "hidden",
            width: "100vw",
            height: "100vh",
        }}>
            <Menu />
            <Header />
            <PageBase title="Sobre mim">
                <Box
                    width="100%"
                    height="100%"
                    display="flex"
                    justifyContent="center" /* Adicionado para espaçamento */
                    padding="20px" /* Espaçamento interno geral */
                >

                    <Box height={"90%"} display={"flex"} width={"85%"} gap={6} mt={"30px"}>
                        <Box display={"flex"} flexDirection={"column"} height={"100%"} gap={4} alignItems={"center"} width={"30%"}>
                            <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
                                <Typography>
                                    <Typography component={"span"} sx={{ fontWeight: "bold" }}>Nome:</Typography> 
                                    Eduardo Forentin
                                </Typography>
                                <Divider variant="fullWidth" component="div" />
                                <Typography>
                                    <Typography component={"span"} sx={{ fontWeight: "bold" }}>Objetivos:</Typography> 
                                    Programador Web Júnior
                                </Typography>
                                <Divider variant="fullWidth" component="div" />
                                <Typography>
                                    <Typography component={"span"} sx={{ fontWeight: "bold" }}>Formação:</Typography> 
                                    Ciência da Computação - UFFS
                                </Typography>
                                <Divider variant="fullWidth" component="div" />
                                <Typography>
                                    <Typography component={"span"} sx={{ fontWeight: "bold" }}>Idade:</Typography> 
                                    20
                                </Typography>
                                <Divider variant="fullWidth" component="div" />
                                <Typography>
                                    <Typography component={"span"} sx={{ fontWeight: "bold" }}>Endereço:</Typography> 
                                    Chapecó-SC
                                </Typography>
                                <Divider variant="fullWidth" component="div" />
                                <Typography>
                                    <Typography component={"span"} sx={{ fontWeight: "bold" }}>Email:</Typography> 
                                    eduardofiorentin336@gmail.com
                                </Typography>
                            </Box>
                            <Box display={"flex"} flexDirection={"column"} width={"100%"} gap={2} alignItems={"center"}>
                                <Box width={"50%"}>
                                    <Button color="secondary" variant="contained" size="large" sx={{ width: "100%" }}>Saiba mais</Button>
                                </Box>
                                <Box width={"50%"}>
                                    <Button color="secondary" variant="contained" size="large" sx={{ width: "100%" }}>Curriculo</Button>
                                </Box>
                            </Box>
                            {/* Icones */}
                            <Box display={"flex"} gap={2}>
                                <IconBox>
                                    <GitHub sx={{ width: "50px", height: "50px", cursor: "pointer" }} color="action" />
                                </IconBox>
                                <IconBox>
                                    <LinkedIn sx={{ width: "50px", height: "50px", cursor: "pointer" }} color="action" />
                                </IconBox>
                            </Box>
                        </Box>
                        <Box width={"60%"} gap={2} display={"flex"} flexDirection={"column"}>

                            <Typography component={"h2"} fontSize={"36px"} fontWeight={"bold"}>
                                Olá, eu sou
                                <Typography component={"span"} color="red" fontSize={"36px"} fontWeight={"bold"}> Eduardo Fiorentin</Typography>
                                , um desenvolvedor web
                            </Typography>

                            <Typography component={"p"} fontSize={"18px"}>
                                Olá, meu nome é Eduardo, sou um desenvolvedor web com foco em front end apaixonado por criar soluções inovadoras e elegantes.
                            </Typography>
                            <Typography component={"p"} fontSize={"18px"}>
                                Tenho um ano de experiência em uma empresa júnior da faculdade, onde participei de diversos projetos envolvendo tecnologias como react js, node, javascript, sass, tailwind, entre outras.
                            </Typography>
                            <Typography component={"p"} fontSize={"18px"}>
                                Além disso, servi ao exercito brasileiro por um ano, onde aprendi muito sobre responsabilidade, valores e trabalho em equipe.
                            </Typography>
                            <Typography component={"p"} fontSize={"18px"}>
                                Atualmente, estou cursando o quarto semestre de ciência da computação na UFFS de Chapecó, onde busco aprimorar meus conhecimentos e habilidades na área.
                            </Typography>
                            <Typography component={"p"} fontSize={"18px"}>
                                Meu objetivo é continuar aprendendo e me desafiando como desenvolvedor.
                            </Typography>
                        </Box>
                    </Box>


                </Box>
            </PageBase>
        </Box>
    )
}

export { Presentation2 }