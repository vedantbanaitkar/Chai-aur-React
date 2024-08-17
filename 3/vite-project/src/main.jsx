import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Chai from "./chai"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Chai />
  </StrictMode>,
)
