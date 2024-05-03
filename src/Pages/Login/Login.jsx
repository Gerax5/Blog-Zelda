import React, {useState, useEffect} from 'react';
import './Login.css'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const validateLogin = async () =>{
        try {
            const response = await fetch("http://127.0.0.1:3000/login", {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            const data = await response.json();
            console.log('Respuesta del servidor:', data);
            if(response.ok && data.token){
                console.log("ENTRO aqui")
                localStorage.setItem('token', data.token);
                localStorage.setItem('sesionActiva', 'true');
                location.reload()
            }else{
                alert("Crendenciales Incorrectas")
            }
        } catch (error) {
            alert('Login fallido: ' + data.message);
            console.error("eerrror",error)
        }
    }


    return (
        <div style={{display:"flex",flexDirection:"column"}}>
            <div className='blur-overlay'></div>
            <div className='containerLogin'>
                <h1 style={{color:"white",alignSelf:"center", fontSize:"40px"}}>LOGIN</h1>
                <div className='cointerData'>
                    <div className='username'>
                        <p style={{color:"white", fontSize:"20px", marginTop:"0.5%"}}>Nombre de usuario</p>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Username' />
                    </div>
                    <div className='username'>
                        <p style={{color:"white", fontSize:"20px", marginTop:"0.5%"}}>Contaseña</p>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password' />
                    </div>
                    <div className='username' style={{marginTop:"3%", width:"20%"}}>
                        <button style={{borderRadius:"5%", backgroundColor:"#494949", cursor:"pointer", border:"solid 1px #ec9e51", color:"white"}} onClick={validateLogin}>Ingresar</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

/***
 * <div className='username'>
                        Contraseña:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                        
                        
                    <input type="submit" value="Iniciar sesión" />
 */

export default Login