import './Header.css'
import React, {useEffect,useState} from 'react'

function Header(){
    const [admin, setAdmin] = useState()

    useEffect(()=>{
        const session = localStorage.getItem('sesionActiva') === 'true';

        if (session) {
            console.log("Eres Admin")
            setAdmin(true)
        } else {
            console.log("No eres admin")
            setAdmin(false)
        }

    },[localStorage.getItem('sesionActiva')])

    const handleLogOut = () => {
        console.log("ENTRO AQUI A EL BOTON")
        localStorage.setItem('sesionActiva', 'false')
        localStorage.setItem('token', "")
        location.reload()
    }

    return (
        <div className='header'>
            <div style={{display:'flex', flexDirection:'row',}}>
                <div className='containerImage'>
                    <img src="https://w7.pngwing.com/pngs/539/749/png-transparent-shield-hylian-princess-zelda-art-shield-emblem-logo-video-game.png"  className="image" alt="Zelda Shield Logo" />
                </div>
                <a href='/Home' className='titleZelda'>Blog Zelda</a>
            </div>
            {admin && (
                <div style={{ width:"60%", display:"flex", flexDirection:'row-reverse', alignItems:'center'}}>
                    <button onClick={handleLogOut} style={{height:"50%", width:"20%", marginLeft:"5%", marginRight:"5%",border:"2px solid #ec9e51", backgroundColor:'red', color:"white",fontWeight:"bold", cursor:"pointer"}}>Cerrar sesion</button>
                    <button style={{height:"50%", width:"20%", backgroundColor:"green", border:"2px solid #ec9e51", fontWeight:"bold", color:"white", cursor:"pointer"}}>Crear Post</button>
                </div>
            )}
        </div>
    )
}

export default Header