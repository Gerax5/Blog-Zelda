import { useState, useEffect} from 'react'
import '../../App.css'
import Card from '../../Components/Card'
import CardCharacters from '../../Components/CardCharacters'
import useApi from '../../Hooks/useApi'


const MainScreen = () =>{
    //Games
  const [activeIndex, setActiveIndex] = useState(0)
  const [cards, setCards] = useState([])
  //Characters
  const [characters, setCharacters] = useState([])
  const [activeIndexCharacters,setActiveIndexCharacters] = useState(0)
  //Objects
  const [objects, setObjects] = useState([])
  const [activeIndexObject, setActiveIndexObject] = useState(0)

  //Data Games
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  const {data:gamesData, isLoading:gamesLoading, error:gamesError} = useApi('http://127.0.0.1:3000/games',options)

  useEffect(() =>{
    
    if(gamesError){
      console.log("Error",gamesError)
    }

    if(!gamesLoading){
      if(gamesData){
        setCards(gamesData)
        console.log(cards)
      }
    }

  }, [gamesData, gamesLoading, gamesError])

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
  const {data:characterData, isLoading:CharacterLoading, error:CharacterError} = useApi('http://127.0.0.1:3000/character',options)

  useEffect(() =>{
    if(CharacterError){
      console.log("Error",CharacterError)
    }

    if(!CharacterLoading){
      if(characterData){
        setCharacters(characterData)
        console.log(cards)
      }
    }

  },[characterData, CharacterLoading, CharacterError])

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

  //Objects
  const {data:ObjectData, isLoading:ObjectLoading, error:ObjectError} = useApi('http://127.0.0.1:3000/object',options)
  
  useEffect(() =>{
    if(ObjectError){
      console.log("Error",ObjectError)
    }

    if(!ObjectLoading){
      if(ObjectData){
        setObjects(ObjectData)
        console.log(cards)
      }
    }
  }, [ObjectData, ObjectLoading, ObjectError])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndexObject(prevIndex => {
        if (prevIndex + 3 >= objects.length) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 5000);
  
    return () => clearInterval(interval);
  }, [objects.length]);

  const nextObject = () => {
    setActiveIndexObject(prevIndex => {
      if (prevIndex + 3 >= objects.length) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const prevObject = () => {
    setActiveIndexObject(prevIndex => {
      if (prevIndex === 0) {
        return objects.length - 3;
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
                {gamesLoading == false  && cards[activeIndex] && (
                  <Card
                    Image={cards[activeIndex].img_game}
                    releaseDate={cards[activeIndex].date_released_game.year}
                    titleGame={cards[activeIndex].name_game}
                    id={cards[activeIndex].id_game}
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
          {cards[activeIndex] && characters.slice(activeIndexCharacters, activeIndexCharacters + 3).map(character => (
            <CardCharacters 
              image={character.img_character} 
              name={character.name_character}
              id={character.id_character}
              tipo={"Character"}
              />
          ))}
          <button onClick={nextCharacter} className='btnSiguiente' style={{backgroundColor:"#494949", color:"white"}}>Siguiente</button>
        </div> 
      </div>
      <div className='containerObjects'>
        <h1 className='TituloJuegos'>Objetos</h1>
        <div className='whiteLine'></div>
        <div className='containerGames' style={{marginLeft:"5%", justifyContent:"space-around"}}>
          <button onClick={prevObject} className='btnAnterior'>Anterior</button>
          {objects.slice(activeIndexObject, activeIndexObject + 3).map(object => (
            <CardCharacters 
              image={object.img_object} 
              name={object.name_object} 
              id={object.id_object}
              background={'#ec9e51'} 
              borderColor={'#494949'}
              marginTopImage={'20%'}
              tipo={"Object"}
              />
          ))}
          <button onClick={nextObject} className='btnSiguiente'>Siguiente</button>
        </div>
      </div>
    </div>
  )
}

export default MainScreen