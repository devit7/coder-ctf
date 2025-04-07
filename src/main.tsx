import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from "@/components/theme-provider"
import "@fontsource/unifont/400.css";
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
          <Analytics />
          <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
