import './Card.css'
import { useNavigate } from 'react-router-dom';

const Card = ({Image, titleGame, releaseDate,id}) =>{

    let navigate = useNavigate()
    const redirect = (ruta) => {
        navigate(ruta)
    }


    return (
        <div className="Card" onClick={() => redirect(`/Game/${id}`)}>
            <div className="containerImageCard">
                <img src={Image} className="imageCard" alt="Zelda Shield Logo" />
            </div>
            <div className='containerDataCard'>
                <div className='containerTitleGame'>
                    <a href='' className='titleCard'>{titleGame}</a>
                </div>
                <h2 href='' style={{marginTop:"5%"}} className='titleCard'>Release Date: {releaseDate}</h2>
            </div>
        </div>
    )    
}

export default Card