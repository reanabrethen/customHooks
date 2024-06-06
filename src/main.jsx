import React from 'react'
import ReactDOM from 'react-dom/client'

import App2 from './App2.jsx'
import './index.css'
import App1 from './App1.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App1/>
    <App2 />
  </React.StrictMode>,
)
