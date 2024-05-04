import {useEffect, useState, useContext} from "react"
import './CharactersInfo.css'
import { useParams } from "react-router-dom"
import { context } from "../../Context/context"
import useAdmin from "../../Hooks/useAdmin"
import useApi from "../../Hooks/useApi"
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const CharactersInfo = ({ruta}) =>{

    let { id } = useParams()
    let navigate = useNavigate()

    const {setMarginTop} = useContext(context)

    const [deleteOptions, setDeleteOptions] = useState(null)
    const [key, setKey] = useState('')

    const isAdmin = useAdmin()

    const {data: delData, error: delError } = useApi(deleteOptions ? `http://127.0.0.1:3000/${ruta}/${id}`: null, deleteOptions)

    useEffect(()=>{
        if(delError){
            console.log("error")
        }

        if(delData){
            alert("Se elimino el elemento")
            navigate("/Home")
        }
    },[delData]) //eslint-disable-line react-hooks/exhaustive-deps

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

    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    const {data } = useApi(`http://127.0.0.1:3000/${ruta}/${id}`,options)

    const onHandleUpdateItem = () =>{
        navigate(`/Update/${ruta}/${id}`)
    }

    const onHandleDelete = () =>{
        setDeleteOptions({
            method: 'DELETE',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${key}`
             }
        });
    }


    if(!data){
        return <div>LOADIIINGGG.....</div>
    }

    return (
        <div className="ContainerInfoCh">
            <div className="imageContainerCharacter">
                <img src={ruta == "Object" ? data[0].img_object : data[0].img_character} className="imageCharacter"></img>
            </div>
            <div className="infoCharacters">
                <h1 style={{marginTop:"10%"}}>{ruta == "Object" ? data[0].name_object : data[0].name_character}</h1>
                <div className='containerTextCharacters'>
                    <p>{ruta == "Object" ? data[0].description_object : data[0].description_character}</p>
                </div>
                
            </div>
            {isAdmin && (
                <div style={{height:"90%", width:"10%", display:"flex", flexDirection:"column",alignItems:"center"}}>
                    <button className='btnEdit' onClick={onHandleUpdateItem}>Actualizar</button>
                    <button className='btnEdit' onClick={onHandleDelete}>Eliminar</button>
                </div>
            )}
        </div>
    )
}

CharactersInfo.propTypes = {
    ruta: PropTypes.string
}

export default CharactersInfo