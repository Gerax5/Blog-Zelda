import './App.css'
import Card from './Components/Card'
import { useState, useEffect} from 'react'

function App() {
  //Games
  const [activeIndex, setActiveIndex] = useState(0)
  const [cards, setCards] = useState([])

  useEffect(() =>{
    const fetchGames = async () => {
        try {
          let api = await fetch('http://127.0.0.1:3000/games')
          let games = await api.json()
          setCards(games)
          console.log(cards)
        } catch (error) {
          console.error("eerrror",error)
        }
    }

    fetchGames();
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [cards.length])

  const nextCard = () => {
    setActiveIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  const prevCard = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  return (
    <div className='contanerTotal'>
      <div className='Principal'>
          <h1 className='TituloJuegos'>Juegos</h1>
          <div className='whiteLine'></div>
          <div className='containerGames'>
            <button onClick={prevCard} className='btnAnterior'>Anterior</button>
                {cards.length > 0 && (
                  <Card
                    Image={cards[activeIndex].img_game}
                    releaseDate={cards[activeIndex].date_released_game.year}
                    titleGame={cards[activeIndex].name_game}
                  />
                )}
            <button onClick={nextCard} className='btnSiguiente'>Siguiente</button>
          </div>
      </div>
    </div>
  )
}

export default App
