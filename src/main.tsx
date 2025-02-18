import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import "@fontsource/unifont/400.css";
import App from './App.tsx'
import Home from './pages/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
