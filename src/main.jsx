import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import iemLogo from './assets/images/iem_logo.png'

// Use the IEM logo as the browser favicon (bundled, hashed URL).
let icon = document.querySelector("link[rel~='icon']")
if (!icon) {
  icon = document.createElement('link')
  icon.rel = 'icon'
  document.head.appendChild(icon)
}
icon.type = 'image/png'
icon.href = iemLogo

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
