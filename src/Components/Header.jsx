import './Header.css'
import React, {useEffect,useState} from 'react'
import useAdmin from '../Hooks/useAdmin'

function Header(){
    const [admin, setAdmin] = useState()

    const isAdmin = useAdmin()
    

    const handleLogOut = () => {
        console.log("ENTRO AQUI A EL BOTON")
        localStorage.setItem('sesionActiva', 'false')
        localStorage.setItem('token', "")
        location.reload()
    }
    console.log(isAdmin)

    return (
        <div className='header'>
            <div style={{display:'flex', flexDirection:'row',}}>
                <div className='containerImage'>
                    <img src="https://w7.pngwing.com/pngs/539/749/png-transparent-shield-hylian-princess-zelda-art-shield-emblem-logo-video-game.png"  className="image" alt="Zelda Shield Logo" />
                </div>
                <a href='/Home' className='titleZelda'>Blog Zelda</a>
            </div>
            {isAdmin && (
                <div style={{ width:"60%", display:"flex", flexDirection:'row-reverse', alignItems:'center'}}>
                    <button onClick={handleLogOut} style={{height:"50%", width:"20%", marginLeft:"5%", marginRight:"5%",border:"2px solid #ec9e51", backgroundColor:'red', color:"white",fontWeight:"bold", cursor:"pointer"}}>Cerrar sesion</button>
                    <button style={{height:"50%", width:"20%", backgroundColor:"green", border:"2px solid #ec9e51", fontWeight:"bold", color:"white", cursor:"pointer"}}>Crear Post</button>
                </div>
            )}
        </div>
    )
}

export default Header