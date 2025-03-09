import { AppThemeProvider } from './shared/contexts/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route} from "react-router-dom"
import { Technologies } from "./pages/technologies/Technologies"
import { Presentation2 } from "./pages/presentation/Presentation2"
import { Experince } from "./pages/experience/Experience"
import { Projects } from "./pages/projects/Projects"

function App() {

  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/" element={<Presentation2/>}/>
            <Route path="/tech" element={<Technologies/>}/>
            <Route path="/experiences" element={<Experince/>}/>
          </Routes>
      </BrowserRouter>
    </AppThemeProvider>
  )
}

export default App
