import './CardCharacters.css'
import { useNavigate } from "react-router-dom";

const CardCharacters = ({image, name, background, borderColor, marginTopImage, id, tipo,setRuta}) =>{

    let navigate = useNavigate()

    const redirect = (ruta) =>{
        navigate(ruta)
    }

    return (
        <div className='containerCharacter' style={{backgroundColor:background, cursor:'pointer'}} onClick={() => redirect(`/${tipo}/${id}`)}>
            <div className='containerImageCharacter'>
                <img  src={image} className='imageCharacters' style={{marginTop:marginTopImage}}/>
            </div>
            <div className='nameCharacter' style={{borderColor:borderColor}}>{name}</div>
        </div>
    )
}

export default CardCharacters