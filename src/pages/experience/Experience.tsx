import { Box } from "@mui/material"
import { PageBase } from "../../shared/layouts/PageBase/PageBase"
import { ExperieceBox } from "../../shared/components/ExperienceBox/ExperienceBox"
import { ExperieceItem } from "../../shared/components/ExperienceItem/ExperienceItem"

export const Experince = () => {
    return (
        <PageBase
            title="Experiencias"
        >
            <ExperieceBox>
                <>
                <ExperieceItem
                    company="Fronteira Tec"
                    date="Jun/22 a Fev/23"
                    description="Desenvolvimento de sistemas com tecnologias como React JS, Node, Javascript, Sass, Tailwind, entre outras. Monitoramento e manutenção de projetos e negociações com clientes."
                    role="Desenvolvedor Front End"
                    />

                <ExperieceItem
                    company="Exercito"
                    date="Fev/23 a Jan/24"
                    description="Manutenção de material de navegação (botes e motores de poupa). Manutenção de equipamentos elétricos em geral. "
                    role="Soldado Recruta"
                />

                <ExperieceItem
                    company="Fronteira Tec"
                    date="Jun/22 a Fev/23"
                    description="Desenvolvimento de sistemas com tecnologias como Java Spring. Desenvolvimento de interfaces, UX/UI. Monitoramento de sistemas. "
                    role="Desenvolvedor Fullstack"
                    />
                </>
            </ExperieceBox>
        </PageBase>
    )
}