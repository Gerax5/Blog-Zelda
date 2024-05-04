import { useEffect, useState } from 'react'
import './GamesInfo.css'
import useApi from '../../Hooks/useApi'
import useAdmin from '../../Hooks/useAdmin';

const GamesInfo = ({id}) =>{
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    const {data, isLoading, error } = useApi(`http://127.0.0.1:3000/games/${id}`,options)

    const isAdmin = useAdmin()


    if (!data) {
        return <div>Cargando...</div>;
    }else{
        console.log(data)
    }

    return (
        <div className='GamesContainer'>
            <div className='GamesImage'>
                <img src={data[0].img_game} className="GamesImg" alt="Zelda Shield Logo" />
            </div>
            <div className='GameInfo'>
                <h1>{data[0].name_game}</h1>
                <h2 style={{height:"5%"}} className='containerTextGame'>Release Date: {data[0].date_released_game.day}/{data[0].date_released_game.month}/{data[0].date_released_game.year}</h2>
                <h2 style={{height:"5%"}} className='containerTextGame'>Acerca de:</h2>
                <div className='containerTextGame'>
                    <p>{data[0].content_games}</p>
                </div>
            </div>
            {isAdmin && (
                <div style={{height:"90%", width:"10%", display:"flex", flexDirection:"column",alignItems:"center"}}>
                    <button className='btnEdit'>Actualizar</button>
                    <button className='btnEdit'>Eliminar</button>
                </div>
            )}
        </div>
    )
}

export default GamesInfo