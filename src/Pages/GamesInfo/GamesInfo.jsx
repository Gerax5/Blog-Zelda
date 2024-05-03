import { useEffect, useState } from 'react'
import './GamesInfo.css'

const GamesInfo = ({id}) =>{

    const [gameData, setGameData] = useState(null)

    useEffect(() =>{
        const fetchGames =  async () =>{
            console.log('ID',id)
          try {
            let api = await fetch(`http://127.0.0.1:3000/games/${id}`)
            let game = await api.json()
            setGameData(game)
          } catch (error) {
            console.error("eerrror",error)
          }
        }
    
        fetchGames()
      }, [])

    if (!gameData) {
        return <div>Cargando...</div>;
    }else{
        console.log(gameData)
    }

    return (
        <div className='GamesContainer'>
            <div className='GamesImage'>
                <img src={gameData[0].img_game} className="GamesImg" alt="Zelda Shield Logo" />
            </div>
            <div className='GameInfo'>
                <h1>{gameData[0].name_game}</h1>
                <h2 style={{height:"5%"}} className='containerTextGame'>Release Date: {gameData[0].date_released_game.day}/{gameData[0].date_released_game.month}/{gameData[0].date_released_game.year}</h2>
                <h2 style={{height:"5%"}} className='containerTextGame'>Acerca de:</h2>
                <div className='containerTextGame'>
                    <p>{gameData[0].content_games}</p>
                </div>
                
            </div>
        </div>
    )
}

export default GamesInfo