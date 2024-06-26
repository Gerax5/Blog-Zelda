import {useState, useEffect, useContext} from "react";
import useAdmin from "../../Hooks/useAdmin"
import AquiNoHayNada from "../../Components/AquiNoHayNada";
import './CreatePost.css'
import useApi from "../../Hooks/useApi";
import { context } from "../../Context/context";

const API_URL = import.meta.env.VITE_API_URL
const ENDPOINT_G = import.meta.env.VITE_ENDPOINT_G
const ENDPOINT_C = import.meta.env.VITE_ENDPOINT_C
const ENDPOINT_O = import.meta.env.VITE_ENDPOINT_O

const CreatePost = () =>{

    const {setMarginTop} = useContext(context)

    useEffect(()=>{
        setMarginTop("50%")
        const element = document.querySelector('.backgroundimage');
        if (element) {
            element.scrollTo(0, 0);
        }
    },[]) //eslint-disable-line react-hooks/exhaustive-deps
    
    const isAdmin = useAdmin()
    const [tipo, setTipo] = useState(ENDPOINT_C)
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [date, setDate] = useState('');
    const [options, setOptions] = useState(null);
    const [key, setKey] = useState('');

    const handleChangeSelection = (event) => {
        setTipo(event.target.value);
    }

    const {data, error } = useApi(options ? `${API_URL}${tipo}`: null, options)

    const handlePressButton = () =>{
        if(name != '' && description != '' && image != ''){
            setOptions({
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${key}`
                 },
                body: JSON.stringify({ 
                    name: name,
                    img: image,
                    description: description,
                    dateRelease: date
                }),
            });
        }else{
            alert("Llene todos los campos por favor")
        }
    }

    useEffect(()=>{
        const token = localStorage.getItem('sesionActiva');
        setKey(token)
    },[])

    useEffect(() => {
        if(error){
            alert("Fallo en post")
        }
    
        if(data){
            alert("Se creo el elemento")
        }
    }, [data, error]);

    if (!isAdmin){
        return <AquiNoHayNada />
    }

    
    
    return (
        <div className="Post">
            <div>
                <h1 style={{color:"white"}}>Crear un nuevo elemento</h1>
            </div>
            <div className="containerData">
                <div className="tipoPost">
                    <p className="subtitlePost"> Ingrese el tipo de elemento que quiere agregar</p>
                    <select value={tipo} onChange={handleChangeSelection} className="content-select">
                        <option value={ENDPOINT_C}>Personaje</option>
                        <option value={ENDPOINT_G}>Juego</option>
                        <option value={ENDPOINT_O}>Objeto</option>
                    </select>
                </div>
                <div className="tipoPost">
                    <p className="subtitlePost"> Ingrese el nombre del personaje</p>
                    <input className="inputTextValues"  value={name} onChange={(e) => setName(e.target.value)} type="text" />
                </div>
                <div className="tipoPost" style={{height:"40%", width:"60%"}}>
                    <p className="subtitlePost">Ingrese la descripcion</p>
                    <textarea className="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="tipoPost">
                    <p className="subtitlePost"> Ingrese el url de la imagen</p>
                    <input className="inputTextValues" type="text" value={image} onChange={(e) => setImage(e.target.value)}/>
                </div>
                {tipo == ENDPOINT_G && (
                    <div className="tipoPost">
                        <p className="subtitlePost"> Ingrese la fecha en la que salio el juego</p>
                        <input className="inputTextValues" type="text" value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                )}
                <div className="tipoPost">
                    <button onClick={handlePressButton}>Crear nuevo elemento</button>
                </div>
            </div>
        </div>
    )

};
    

export default CreatePost