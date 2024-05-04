import { useState} from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer.jsx'
import BackgroundImage from './Components/BackgroundImage.jsx'
import AppRouter from './Router/AppRouter.jsx'
import { context } from './Context/context.jsx'



function App() {
  const [visibleFooter, setVisibleFooter] = useState(true)
  const [marginTop, setMarginTop] = useState("120%")

  const valorDelContexto = {
    visibleFooter,
    setVisibleFooter,
    marginTop,
    setMarginTop
  };

  return (
    <context.Provider value={valorDelContexto}>
      <Header></Header>
      <BackgroundImage imageUrl="https://www.xtrafondos.com/wallpapers/the-legend-of-zelda-breath-of-the-wild-4066.jpg">
        <AppRouter />
        {visibleFooter && (
        <Footer marginTop={marginTop}></Footer>
        )}
        
      </BackgroundImage>
    </context.Provider>
  )
}

export default App
