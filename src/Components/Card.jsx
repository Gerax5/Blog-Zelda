import './Card.css'

const Card = ({Image, titleGame, releaseDate}) =>{
    return (
        <div className="Card">
            <div className="containerImageCard">
                <img src={Image} className="imageCard" alt="Zelda Shield Logo" />
            </div>
            <div className='containerDataCard'>
                <div className='containerTitleGame'>
                    <a href='' className='titleCard'>{titleGame}</a>
                </div>
                <a href='' style={{marginTop:"5%"}} className='titleCard'>Release Date: {releaseDate}</a>
            </div>
            
        </div>
    )    
}

export default Card