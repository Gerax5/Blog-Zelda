import { useState, useEffect} from 'react'
import './App.css'
import Card from './Components/Card'
import CardCharacters from './Components/CardCharacters'


function App() {
  //Games
  const [activeIndex, setActiveIndex] = useState(0)
  const [cards, setCards] = useState([])
  //Characters
  const [characters, setCharacters] = useState([])
  const [activeIndexCharacters,setActiveIndexCharacters] = useState(0)

  //Data Games
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

  //Data Characters
  useEffect(() =>{
    const fetchCharacters = async () =>{
      try {
        let api = await fetch('http://127.0.0.1:3000/character')
        let character = await api.json()
        setCharacters(character)
        console.log(characters)
      } catch (error) {
        console.error("eerrror",error)
      }
    }

    fetchCharacters()
  },[])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndexCharacters(prevIndex => {
        if (prevIndex + 3 >= characters.length) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 5000);
  
    return () => clearInterval(interval);
  }, [characters.length]);

  const nextCharacter = () => {
    setActiveIndexCharacters(prevIndex => {
      if (prevIndex + 3 >= characters.length) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const prevCharacter = () => {
    setActiveIndexCharacters(prevIndex => {
      if (prevIndex === 0) {
        return characters.length - 3;
      } else {
        return prevIndex - 1;
      }
    });
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
      <div className='CotainerCharacters'>
        <h1 className='TituloJuegos'>Personajes</h1>
        <div className='whiteLine'></div>
        <div className='containerGames' style={{marginLeft:"5%", justifyContent:"space-around"}}>
          <button onClick={prevCharacter} className='btnAnterior' style={{backgroundColor:"#494949", color:"white"}}>Anterior</button>
          {characters.slice(activeIndexCharacters, activeIndexCharacters + 3).map(character => (
            <CardCharacters image={character.img_character} name={character.name_character}/>
          ))}
          <button onClick={nextCharacter} className='btnSiguiente' style={{backgroundColor:"#494949", color:"white"}}>Siguiente</button>
        </div> 
      </div>
    </div>
  )
}

export default App
