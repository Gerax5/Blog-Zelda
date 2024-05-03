import React,{useEffect, useState} from "react"
import './CharactersInfo.css'

const CharactersInfo = ({id,ruta}) =>{

    const [dataCharacter, setDataCharacter] = useState(null)

    useEffect(()=>{
        const getDataCharacter = async () =>{
            try {
                let api = await fetch(`http://127.0.0.1:3000/${ruta}/${id}`)
                let game = await api.json()
                setDataCharacter(game)
            } catch (error) {
            console.error("eerrror",error)
            }
        }

        getDataCharacter()
    },[])

    if(!dataCharacter){
        return <div>LOADIIINGGG.....</div>
    }

    return (
        <div className="ContainerInfoCh">
            <div className="imageContainerCharacter">
                <img src={ruta == "Object" ? dataCharacter[0].img_object : dataCharacter[0].img_character} className="imageCharacter"></img>
            </div>
            <div className="infoCharacters">
                <h1 style={{marginTop:"10%"}}>{ruta == "Object" ? dataCharacter[0].name_object : dataCharacter[0].name_character}</h1>
                <div className='containerTextCharacters'>
                    <p>{ruta == "Object" ? dataCharacter[0].description_object : dataCharacter[0].description_character}</p>
                </div>
                
            </div>
        </div>
    )
}

export default CharactersInfo