import { Typography } from "@mui/material"
import {Routes, Route} from "react-router-dom"
import { Home } from "../pages/presentation/Presentation"

export const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}