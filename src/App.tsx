import { useState } from 'react'
import Button from '@mui/material/Button';
import { AppThemeProvider } from './shared/contexts/ThemeContext';
import { AppRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';


function App() {

  return (
    <AppThemeProvider>
    <BrowserRouter>

      {/* <Button variant="contained">Hello world</Button> */}
      <AppRoutes/>
   
    </BrowserRouter>
    </AppThemeProvider>
  )
}

export default App
