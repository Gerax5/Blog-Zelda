import './CardCharacters.css'

const CardCharacters = ({image, name, background, borderColor, marginTopImage}) =>{
    return (
        <div className='containerCharacter' style={{backgroundColor:background}}>
            <div className='containerImageCharacter'>
                <img  src={image} className='imageCharacters' style={{marginTop:marginTopImage}}/>
            </div>
            <div className='nameCharacter' style={{borderColor:borderColor}}>{name}</div>
        </div>
    )
}

export default CardCharacters