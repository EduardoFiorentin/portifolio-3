import { Typography } from "@mui/material"
import {Routes, Route, Navigate} from "react-router-dom"
import { Home } from "../pages/presentation/Presentation1"
import { Technologies } from "../pages/technologies/Technologies"
import { Presentation2 } from "../pages/presentation/Presentation2"
import { Experince } from "../pages/experience/Experience"
import { Projects } from "../pages/projects/Projects"
import { NavLink } from "react-router-dom"

export const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="" element={<Presentation2/>}/>
            <Route path="/tech" element={<Technologies/>}/>
            <Route path="/experiences" element={<Experince/>}/>
        </Routes>
    )
}