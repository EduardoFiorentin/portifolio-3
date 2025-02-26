import { Box } from "@mui/material"
import { PageBase } from "../../shared/layouts/PageBase/PageBase"
import { ProjectItem } from "../../shared/components/ProjectItem/ProjectItem"

import imageTeste from "../../assets/img/foto_perfil.jpg"
import imageSearchDevs from "../../assets/img/searchdevs.png" 
import imageCheckSp from "../../assets/img/csia.png" 
import imageSr from "../../assets/img/sr.png" 
import imageGym from "../../assets/img/gym.png" 

export const Projects = () => {

    const projects = [
        {
            img: imageSearchDevs,
            title: "Search Devs",
            description: "Aplicação que permite pesquisar perfis do github via Github REST API e visualizar seus repositórios e principais características. ",
            flags: ["React", "React Router", "Axios", "Lucide", "TypeScript"],
            github: "https://",
            deploy: "https://",
            video: "https://"
        },
        {
            img: imageCheckSp,
            title: "CheckSpeechIA",
            description: "Landing Page de apresentação de uma API (saas) de conversão de fala em texto.",
            flags: ["React", "Lucide", "Slick", "Material UI", "Typescript", "Tailwind"],
            github: "https://",
            deploy: "https://",
            video: "https://"
        },
        {
            img: imageSr,
            title: "Calculadora Gráfica",
            description: "Ferramenta que permite calcular a área abaixo de uma curva 2D (soma de Riemman) e extimar curvas de nível em funções de duas variáveis.",
            flags: ["HTML5", "CSS3", "JS"],
            github: "https://",
            deploy: "https://",
            video: "https://"
        },
        {
            img: imageGym,
            title: "Gym",
            description: "Página de apresentação de uma academia fictícia.",
            flags: ["HTML5", "CSS3"],
            github: "https://",
            deploy: "https://",
            video: "https://"
        }
   
    ]

    return (
        <PageBase title="Projetos">
            <Box
                // paddingLeft="20px"
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                >

                {
                    projects.map(item => (
                        <ProjectItem 
                            key={item.title}
                            {...item}
                            // img={item.img}
                            // deploy={item.deploy}
                            // description={item.description}
                            // flags={item.flags}
                            // github={item.github}
                            // title={item.title}
                            // video={item.video}
                        />
                    ))
                }

            </Box>
        </PageBase>
    )
}