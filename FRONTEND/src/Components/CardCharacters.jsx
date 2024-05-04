import './CardCharacters.css'
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const CardCharacters = ({image, name, background, borderColor, marginTopImage, id, tipo}) =>{

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

CardCharacters.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    background: PropTypes.string,
    borderColor: PropTypes.string,
    marginTopImage: PropTypes.string,
    id: PropTypes.number,
    tipo: PropTypes.string
}

export default CardCharacters