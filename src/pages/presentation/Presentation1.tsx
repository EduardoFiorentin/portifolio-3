import { Box, Button, Typography } from "@mui/material"
import { Header } from "../../shared/components/Header/Header"
import { PageBase } from "../../shared/layouts/PageBase/PageBase"
import image from "../../assets/img/foto_perfil.jpg"
import { Menu } from "../../shared/components/Menu/Menu"

const Presentation1 = () => {
    return (
        <Box sx={{
            overflowX: "hidden",
            width: "100vw",
            height: "100vh",
            }}>
            <Menu/>
            <Header/>
            <PageBase title="Sobre mim">
            <Box
                width="100%"
                height="100%"
                display="flex"
                justifyContent="center" /* Adicionado para espaçamento */
                padding="20px" /* Espaçamento interno geral */
                >
                {/* Coluna 1 */}
                    <Box
                        width="20%"
                        height="90vh"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        marginRight="20px" /* Espaçamento entre colunas */
                    >
                        <img
                        src={image}
                        width="250px"
                        style={{ borderRadius: "100%", marginBottom: "20px", border: "1px solid cyan" }}
                    
                        />
                        <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
                            <Typography><Typography component={"span"} sx={{fontWeight: "bold"}}>Nome:</Typography> Eduardo Forentin</Typography>
                            <Typography><Typography component={"span"} sx={{fontWeight: "bold"}}>Objetivos:</Typography> Estágio na área de TI / Programador Web Júnior</Typography>
                            <Typography><Typography component={"span"} sx={{fontWeight: "bold"}}>Formação:</Typography> Ciência da Computação - UFFS - 5/8</Typography>
                            <Typography><Typography component={"span"} sx={{fontWeight: "bold"}}>Idade:</Typography> 20</Typography>
                            <Typography><Typography component={"span"} sx={{fontWeight: "bold"}}>Endereço:</Typography> Chapecó-SC</Typography>
                            <Typography><Typography component={"span"} sx={{fontWeight: "bold"}}>Email:</Typography> eduardofiorentin336@gmail.com</Typography>
                        </Box>
                    </Box>

                    {/* Coluna 2 */}
                    <Box
                        width="40%" /* Ajustado para ocupar mais espaço proporcional */
                        height="100%"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        padding="20px"
                        alignSelf={"center"}
                        textAlign={"center"}
                    >
                        <Typography >
                            Olá, meu nome é Eduardo, sou um desenvolvedor web com foco em front end apaixonado por criar soluções inovadoras e elegantes. Tenho um ano de experiência em uma empresa júnior da faculdade, onde participei de diversos projetos envolvendo tecnologias como react js, node, javascript, sass, tailwind, entre outras. Além disso, servi ao exercito brasileiro por um ano, onde aprendi muito sobre responsabilidade, valores e trabalho em equipe. Atualmente, estou cursando o quarto semestre de ciência da computação na UFFS de Chapecó, onde busco aprimorar meus conhecimentos e habilidades na área. Meu objetivo é continuar aprendendo e me desafiando como desenvolvedor.
                        </Typography>
                        <Box
                            marginTop={10}
                            display={"flex"}
                            flexDirection={"column"}
                            gap={2}
                            >
                                <Box>
                                    <Button color="secondary" variant="contained" size="large">Saiba mais</Button>
                                </Box>
                                <Box>
                                    <Button color="secondary" variant="contained" size="large">Curriculo</Button>
                                </Box>
                        </Box>
                    </Box>
                </Box>
            </PageBase>
        </Box>
    )
}

export { Presentation1 as Home }