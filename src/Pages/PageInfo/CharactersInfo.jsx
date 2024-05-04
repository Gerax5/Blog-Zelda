import React,{useEffect, useState, useContext} from "react"
import './CharactersInfo.css'
import { useParams } from "react-router-dom"
import {context} from '../../App'
import useApi from "../../Hooks/useApi"

const CharactersInfo = ({ruta}) =>{

    let { id } = useParams();

    const {setMarginTop} = useContext(context)


    useEffect(()=>{
        setMarginTop("45%")
        const element = document.querySelector('.backgroundimage');
        if (element) {
            element.scrollTo(0, 0);
        }
    },[])

    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    const {data, isLoading, error } = useApi(`http://127.0.0.1:3000/${ruta}/${id}`,options)


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
        </div>
    )
}

export default CharactersInfo