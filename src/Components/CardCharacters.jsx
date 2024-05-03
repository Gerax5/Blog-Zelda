import './CardCharacters.css'

const CardCharacters = ({image, name, background, borderColor, marginTopImage, id}) =>{

    const redirect = (ruta) =>{
        window.history.pushState({}, "", ruta);
        location.reload()
    }

    return (
        <div className='containerCharacter' style={{backgroundColor:background, cursor:'pointer'}} onClick={() => redirect(`/Character/${id}`)}>
            <div className='containerImageCharacter'>
                <img  src={image} className='imageCharacters' style={{marginTop:marginTopImage}}/>
            </div>
            <div className='nameCharacter' style={{borderColor:borderColor}}>{name}</div>
        </div>
    )
}

export default CardCharacters