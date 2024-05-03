import { useState, useEffect} from 'react'
import './App.css'
import Card from './Components/Card'
import CardCharacters from './Components/CardCharacters'
import Router from './Router/Router'
import Header from './Components/Header'
import Footer from './Components/Footer.jsx'
import BackgroundImage from './Components/BackgroundImage.jsx'


function App() {
  const [rutaActual, setRutaActual] = useState("app")
  const [visibleFooter, setVisibleFooter] = useState(true)
  const [marginTop, setMarginTop] = useState("120%")

  useEffect(()=>{
    if(window.location.pathname == "/"){
      window.location.href = '/Home'
    }
    if(window.location.pathname == '/admin'){
      setVisibleFooter(false)
    }else{
      setVisibleFooter(true)
    }

    if(window.location.pathname.includes("/Character") || window.location.pathname.includes("/Object")){
      setMarginTop("45%")
    }
    console.log(window.location.pathname)
    setRutaActual(window.location.pathname)
  },[])

  return (
    <>
      <Header></Header>
      <BackgroundImage imageUrl="https://www.xtrafondos.com/wallpapers/the-legend-of-zelda-breath-of-the-wild-4066.jpg">
        <Router ruta={rutaActual}></Router>
        {visibleFooter && (
        <Footer marginTop={marginTop}></Footer>
        )}
        
      </BackgroundImage>
    </>
  )
}

export default App
