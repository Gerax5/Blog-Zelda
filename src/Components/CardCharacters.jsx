import './CardCharacters.css'

const CardCharacters = ({image, name, background}) =>{
    return (
        <div className='containerCharacter' style={{backgroundColor:background}}>
            <div className='containerImageCharacter'>
                <img  src={image} className='imageCharacters'/>
            </div>
            <div className='nameCharacter'>{name}</div>
        </div>
    )
}

export default CardCharacters