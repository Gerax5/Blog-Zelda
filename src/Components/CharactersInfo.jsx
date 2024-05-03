import React,{useEffect, useState} from "react"
import './CharactersInfo.css'

const CharactersInfo = ({id}) =>{

    const [dataCharacter, setDataCharacter] = useState(null)

    useEffect(()=>{
        const getDataCharacter = async () =>{
            try {
                let api = await fetch(`http://127.0.0.1:3000/games/${id}`)
                let game = await api.json()
                setGameData(game)
            } catch (error) {
            console.error("eerrror",error)
            }
        }
    },[])

    if(!dataCharacter){
        return <div>LOADIIINGGG.....</div>
    }

    return (
        <div className="ContainerInfoCh">
            <div className="imageCharacter">
                Hola
            </div>
        </div>
    )
}

export default CharactersInfo