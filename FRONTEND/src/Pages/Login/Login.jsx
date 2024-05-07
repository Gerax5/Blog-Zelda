import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import useApi from '../../Hooks/useApi';

const API_URL = import.meta.env.VITE_API_URL
const ENDPOINT_L = import.meta.env.VITE_ENDPOINT_L

const Login = () => {

    let navigate = useNavigate()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [options, setOptions] = useState(null);

    const {data, error } = useApi(options ? `${API_URL}${ENDPOINT_L}`: null, options)

    const validateLogin = () =>{
        setOptions({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username, password: password.toString()}),
        });
    }

    useEffect(() => {
        if(error){
          alert("Credenciales incorrectas")
        }
    
        if(data){
          localStorage.setItem('token', data.token);
          localStorage.setItem('sesionActiva', 'true');
          navigate("/Home")
          location.reload()
        }
    }, [data, error]); //eslint-disable-line react-hooks/exhaustive-deps


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