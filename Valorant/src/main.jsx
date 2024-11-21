import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './style/Carrocel.scss'
import "./global.scss"

import App from './components/App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
