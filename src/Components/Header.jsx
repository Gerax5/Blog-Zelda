import './Header.css'

function Header(){
    return (
        <div className='header'>
            <div style={{display:'flex', flexDirection:'row'}}>
                <div className='containerImage'>
                    <img src="https://w7.pngwing.com/pngs/539/749/png-transparent-shield-hylian-princess-zelda-art-shield-emblem-logo-video-game.png"  className="image" alt="Zelda Shield Logo" />
                </div>
                <a href='/Home' className='titleZelda'>Blog Zelda</a>
            </div>
            
        </div>
    )
}

export default Header