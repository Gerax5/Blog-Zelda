import { useEffect, useState, useContext } from 'react'
import './GamesInfo.css'
import useApi from '../../Hooks/useApi'
import useAdmin from '../../Hooks/useAdmin';
import { useParams, useNavigate } from 'react-router-dom';
import { context } from '../../Context/context';

const GamesInfo = () =>{

    let { id } = useParams()
    let navigate = useNavigate()
    const {setMarginTop} = useContext(context)
    const [deleteOptions, setDeleteOptions] = useState(null)
    const [key, setKey] = useState('')

    const {data: delData, error: delError } = useApi(deleteOptions ? `http://127.0.0.1:3000/games/${id}`: null, deleteOptions)

    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    const {data} = useApi(`http://127.0.0.1:3000/games/${id}`,options)

    useEffect(()=>{
        if(delError){
            console.log("error")
        }

        if(delData){
            alert("Se elimino el elemento")
            navigate("/Home")
        }
    },[delData]) //eslint-disable-line react-hooks/exhaustive-deps

    const isAdmin = useAdmin()

    useEffect(()=>{
        setMarginTop("45%")
        const element = document.querySelector('.backgroundimage');
        if (element) {
            element.scrollTo(0, 0);
        }
    },[]) //eslint-disable-line react-hooks/exhaustive-deps

    useEffect(()=>{
        const token = localStorage.getItem('sesionActiva');
        setKey(token)
    },[])


    if (!data) {
        return <div>Cargando...</div>;
    }else{
        console.log(data)
    }

    const onHandleUpdateItem = () =>{
        navigate(`/Update/games/${id}`)
    }

    const onHandleDeleteItem = () =>{
        setDeleteOptions({
            method: 'DELETE',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${key}`
             }
        });
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
                    <button className='btnEdit' onClick={onHandleUpdateItem}>Actualizar</button>
                    <button className='btnEdit' onClick={onHandleDeleteItem}>Eliminar</button>
                </div>
            )}
        </div>
    )
}

export default GamesInfo