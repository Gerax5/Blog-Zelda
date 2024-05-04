import './MainScreenSkeleton.css'

const MainScreenSkeleton = () =>{
    return (
        <div className='contanerTotal'>
          <div className='Principal skeleton'style={{backgroundColor:"grey"}}>
              <h1 className='TituloJuegos'></h1>
              <div className='whiteLine'></div>
              <div className='containerGames skeleton' style={{backgroundColor:"grey"}}>
                <button className='btnAnterior skeleton' style={{width:"8%"}}></button>
                <div className="Card" style={{backgroundColor:"#9B9B9B"}}>
                    <div className="containerImageCard skeleton" style={{backgroundColor:"#9B9B9B",border:"1px solid"}}>
                        
                    </div>
                    <div className='containerDataCard skeleton' style={{border:"1px solid"}}>
                        <div className='containerTitleGame skeleton' >
                            <a href='' className='titleCard'></a>
                        </div>
                        <h2 href='' style={{marginTop:"5%"}} className='titleCard'></h2>
                    </div>
                </div>
                <button onClick={""} className='btnSiguiente skeleton' style={{width:"8%"}}></button>
              </div>
          </div>
          <div className='CotainerCharacters skeleton'>
                <h1 className='TituloJuegos'></h1>
                <div className='whiteLine'></div>
                <div className='containerGames skeleton' style={{marginLeft:"5%", justifyContent:"space-around", border:"1px solid"}}>
                <button onClick={""} className='btnAnterior skeleton' style={{backgroundColor:"#494949", color:"white", width:"7%"}}></button>
                <div className='containerCharacter skeleton' style={{border:"1px solid"}}>
                    <div className='containerImageCharacter skeleton' style={{border:"1px solid"}}>
                    </div>
                    
                </div>
                <div className='containerCharacter skeleton' style={{border:"1px solid"}}>
                    <div className='containerImageCharacter skeleton' style={{border:"1px solid"}}>
                    </div>
                </div>
                <div className='containerCharacter skeleton' style={{border:"1px solid"}}>
                    <div className='containerImageCharacter skeleton' style={{border:"1px solid"}}>
                    </div>
                </div>
                <button onClick={""} className='btnSiguiente skeleton' style={{backgroundColor:"#494949", color:"white", width:"7%"}}></button>
                </div> 
            </div>
            <div className='containerObjects skeleton'>
                <h1 className='TituloJuegos'></h1>
                <div className='whiteLine'></div>
                <div className='containerGames skeleton' style={{marginLeft:"5%", justifyContent:"space-around", border:"1px solid"}}>
                <button onClick={""} className='btnAnterior skeleton' style={{backgroundColor:"#494949", color:"white", width:"7%"}}></button>
                <div className='containerCharacter skeleton' style={{border:"1px solid"}}>
                    <div className='containerImageCharacter skeleton' style={{border:"1px solid"}}>
                    </div>
                    
                </div>
                <div className='containerCharacter skeleton' style={{border:"1px solid"}}>
                    <div className='containerImageCharacter skeleton' style={{border:"1px solid"}}>
                    </div>
                </div>
                <div className='containerCharacter skeleton' style={{border:"1px solid"}}>
                    <div className='containerImageCharacter skeleton' style={{border:"1px solid"}}>
                    </div>
                </div>
                <button onClick={""} className='btnSiguiente skeleton' style={{backgroundColor:"#494949", color:"white", width:"7%"}}></button>
                </div> 
            </div>
        </div>
          
    )
}

export default MainScreenSkeleton