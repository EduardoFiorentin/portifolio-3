import { Typography } from "@mui/material"
import {Routes, Route} from "react-router-dom"
import { Home } from "../pages/presentation/Presentation1"
import { Technologies } from "../pages/technologies/Technologies"
import { Presentation2 } from "../pages/presentation/Presentation2"

export const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Technologies/>}/>
        </Routes>
    )
}