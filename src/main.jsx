import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Components/Header'
import BackgroundImage from './Components/BackgroundImage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <BackgroundImage imageUrl="https://www.xtrafondos.com/wallpapers/the-legend-of-zelda-breath-of-the-wild-4066.jpg">
      <App />
    </BackgroundImage>
  </React.StrictMode>,
)
