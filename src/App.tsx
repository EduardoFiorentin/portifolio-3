import { useState } from 'react'
import Button from '@mui/material/Button';
import { AppThemeProvider } from './shared/contexts/ThemeContext';
import { AppRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Typography } from "@mui/material"
import {Routes, Route} from "react-router-dom"
import { Home } from "./pages/presentation/Presentation1"
import { Technologies } from "./pages/technologies/Technologies"

import { Presentation2 } from "./pages/presentation/Presentation2"
import { Experince } from "./pages/experience/Experience"
import { Projects } from "./pages/projects/Projects"

function App() {

  return (
    <AppThemeProvider>
    <BrowserRouter>

      {/* <Button variant="contained">Hello world</Button> */}
      <Routes>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="" element={<Presentation2/>}/>
          <Route path="/tech" element={<Technologies/>}/>
          <Route path="/experiences" element={<Experince/>}/>
        </Routes>
    </BrowserRouter>

    </AppThemeProvider>
  )
}

export default App
