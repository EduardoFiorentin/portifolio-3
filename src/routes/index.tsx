import { Typography } from "@mui/material"
import {Routes, Route} from "react-router-dom"

export const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Typography> Hello, world!</Typography>}/>
        </Routes>
    )
}