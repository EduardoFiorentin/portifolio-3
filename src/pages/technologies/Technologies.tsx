import { Box, Typography } from "@mui/material"
import { PageBase } from "../../shared/layouts/PageBase/PageBase"
// import { Html, Css, Javascript, Image } from "@mui/icons-material"
import { TechCardBox } from "../../shared/components/TechCardBox/TechCardBox"
// import { Icon } from "../../shared/components/Icon/Icon"
import { Icon } from "../../shared/components/Icon/Icon"
import { useState } from "react"

import Html from "../../assets/icons/Html.svg";
import Css from "../../assets/icons/Css.svg";
import Js from "../../assets/icons/Js.svg";
import Node from "../../assets/icons/Node.svg";
import Ts from "../../assets/icons/Ts.svg";
import React from "../../assets/icons/React.svg";
import Spring from "../../assets/icons/Spring.svg";
import Mui from "../../assets/icons/Mui.svg";
import Tw from "../../assets/icons/Tw.svg";
import Git from "../../assets/icons/Git.svg";
import Swagger from "../../assets/icons/Swagger.svg";
import Pg from "../../assets/icons/Pg.svg";
import Figma from "../../assets/icons/Figma.svg";
import Java from "../../assets/icons/Java.svg";
import Py from "../../assets/icons/Py.svg";
import Cpp from "../../assets/icons/Cpp.svg";
import { Menu } from "../../shared/components/Menu/Menu"

const descriptions = {
    "default": {
        "title": "Olá, mundo!",
        "desc": "--*-- Passe o mouse sobre os ícones para ler --*--",
    },
    "html": { 
        "title": "HTML5", 
        "desc": "Linguagem de marcação usada para estruturar o conteúdo de páginas web, incluindo textos, links, imagens e outros elementos." 
    },
    "css": { 
        "title": "CSS3", 
        "desc": "Linguagem de estilos em cascata, utilizada para definir a aparência e o layout das páginas web, incluindo cores, fontes e responsividade." 
    },
    "js": { 
        "title": "JavaScript", 
        "desc": "Linguagem de programação usada para criar interatividade em páginas web, permitindo manipulação do DOM, eventos e chamadas assíncronas. Serve ainda como base para o desenvolvimento de frameworks e bibliotecas populares, como ReactJs e Vue." 
    },
    "node": { 
        "title": "Node.js", 
        "desc": "Ambiente de execução para JavaScript no lado do servidor que permite a criação de aplicações web escaláveis e APIs eficientes." 
    },
    "ts": { 
        "title": "TypeScript", 
        "desc": "Superset do JavaScript que adiciona tipagem estática, melhorando a escalabilidade e a manutenção do código." 
    },
    "react": { 
        "title": "React", 
        "desc": "Framework open source JavaScript para construção de interfaces de usuário dinâmicas e reativas, baseada em componentes reutilizáveis. Otimiza a renderização de páginas web e aplicações, facilitando a criação de SPAs (Single Page Applications)." 
    },
    "spring": { 
        "title": "Spring Boot", 
        "desc": "Framework open source Java para desenvolvimento de aplicações web e microsserviços, baseado nos padrões de projeto inversão de controle e injeção de dependẽncias. Facilita a criação de aplicações robustas e escaláveis. " 
    },
    "mui": { 
        "title": "Material-UI", 
        "desc": "Biblioteca de componentes React baseada no design system do Google Material Design, facilitando a criação de interfaces modernas." 
    },
    "tw": { 
        "title": "Tailwind CSS", 
        "desc": "Framework CSS utilitário que permite a criação rápida de estilos sem a necessidade de escrever CSS tradicional." 
    },
    "git": { 
        "title": "Git", 
        "desc": "Sistema de controle de versão distribuído usado para rastrear mudanças no código-fonte e facilitar a colaboração entre desenvolvedores." 
    },
    "swagger": { 
        "title": "Swagger", 
        "desc": "Ferramenta para documentação e teste de APIs REST, permitindo a visualização e interação com endpoints de forma dinâmica." 
    },
    "pg": { 
        "title": "PostgreSQL", 
        "desc": "Banco de dados relacional de código aberto conhecido por sua robustez, confiabilidade e suporte a extensões avançadas." 
    },
    "figma": { 
        "title": "Figma", 
        "desc": "Ferramenta de design colaborativo baseada na nuvem, amplamente utilizada para prototipagem e criação de interfaces de usuário." 
    },
    "java": { 
        "title": "Java", 
        "desc": "Linguagem de programação orientada a objetos amplamente usada para desenvolvimento de aplicações empresariais, Android e sistemas web." 
    },
    "py": { 
        "title": "Python", 
        "desc": "Linguagem de programação versátil e de alto nível, usada em desenvolvimento web, análise de dados, inteligência artificial e automação." 
    },
    "cpp": { 
        "title": "C++", 
        "desc": "Linguagem de programação poderosa e de alto desempenho, usada em sistemas embarcados, jogos, motores gráficos e aplicações de alto desempenho. Usei para um compilador" 
    }
};

export const Technologies = () => {

    const [title, setTitle] = useState(descriptions.default.title)
    const [desc, setDesc] = useState(descriptions.default.desc)

    return (
        <PageBase
            title="Tecnologias"
        > 
        <>
            <Menu />
            <Box
            height="auto"
            display="flex"
            justifyContent="space-around"
            padding="20px"
            gap={10}
        >
            <Box height={"90%"} display={"flex"} flexDirection={"column"} width={"40%"} gap={6} mt={"30px"}>
                <Typography component={"h3"} fontSize={"30px"} fontWeight={"bold"}>{title}</Typography>
                <Typography component={"h3"} fontSize={"20px"} fontWeight={"normal"} color="textSecondary"><p>{desc}</p></Typography>
            </Box>

            <Box display={"flex"} flexDirection={"column"} gap={2} width={"40%"}>
                {/* Linha 1 */}
                <Box display={"flex"} flexDirection={"row"} gap={2}>
                    <TechCardBox payload={descriptions.html} setTitle={setTitle} setDesc={setDesc}>
                        <Icon src={Html}/>
                    </TechCardBox>
                    <TechCardBox payload={descriptions.css} setTitle={setTitle} setDesc={setDesc}>
                        <Icon src={Css}/>
                    </TechCardBox>
                    <TechCardBox payload={descriptions.js} setTitle={setTitle} setDesc={setDesc}>
                        <Icon src={Js}/>
                    </TechCardBox>
                    <TechCardBox payload={descriptions.node} setTitle={setTitle} setDesc={setDesc}>
                        <Icon src={Node}/>
                    </TechCardBox>
                </Box>

                {/* Linha 2 */}
                <Box display={"flex"} flexDirection={"row"} gap={2}>
                    <TechCardBox payload={descriptions.ts} setTitle={setTitle} setDesc={setDesc}>
                        <Icon src={Ts}/>
                    </TechCardBox>
                    <TechCardBox payload={descriptions.react} setTitle={setTitle} setDesc={setDesc}>
                        <Icon src={React}/>
                    </TechCardBox>
                    <TechCardBox payload={descriptions.spring} setTitle={setTitle} setDesc={setDesc}>
                        <Icon src={Spring}/>
                    </TechCardBox>
                    <TechCardBox payload={descriptions.mui} setTitle={setTitle} setDesc={setDesc}>
                        <Icon src={Mui}/>
                    </TechCardBox>
                </Box>

                {/* Linha 3 */}
                <Box display={"flex"} flexDirection={"row"} gap={2}>
                    <TechCardBox payload={descriptions.tw} setTitle={setTitle} setDesc={setDesc}>
                        <Icon src={Tw}/>
                    </TechCardBox>
                    <TechCardBox payload={descriptions.git} setTitle={setTitle} setDesc={setDesc}>
                        <Icon src={Git}/>
                    </TechCardBox>
                    <TechCardBox payload={descriptions.swagger} setTitle={setTitle} setDesc={setDesc}>
                        <Icon src={Swagger}/>
                    </TechCardBox>
                    <TechCardBox payload={descriptions.pg} setTitle={setTitle} setDesc={setDesc}>
                        <Icon src={Pg}/>
                    </TechCardBox>
                </Box>

                {/* Linha 4 */}
                <Box display={"flex"} flexDirection={"row"} gap={2}>
                    <TechCardBox payload={descriptions.figma} setTitle={setTitle} setDesc={setDesc}>
                        <Icon src={Figma}/>
                    </TechCardBox>
                    <TechCardBox payload={descriptions.java} setTitle={setTitle} setDesc={setDesc}>
                        <Icon src={Java}/>
                    </TechCardBox>
                    <TechCardBox payload={descriptions.py} setTitle={setTitle} setDesc={setDesc}>
                        <Icon src={Py}/>
                    </TechCardBox>
                    <TechCardBox payload={descriptions.cpp} setTitle={setTitle} setDesc={setDesc}>
                        <Icon src={Cpp}/>
                    </TechCardBox>
                </Box>
            </Box>
        </Box>
        </>
        </PageBase>
    )
}