import React, {useState, useEffect, useContext} from "react";
import useAdmin from "../../Hooks/useAdmin"
import AquiNoHayNada from "../../Components/AquiNoHayNada";
import './UpdatePost.css'
import useApi from "../../Hooks/useApi";
import {context} from '../../App'
import { useParams } from "react-router-dom";

const UpdatePost = () =>{

    const {setMarginTop} = useContext(context)
    const { tipo, id } = useParams()
    const isAdmin = useAdmin()
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [date, setDate] = useState('');
    const [options, setOptions] = useState(null);
    const [key, setKey] = useState('');

    const optionsUpdate = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    const {data:updateDate, isLoading:updateIsLoading, error:updateError } = useApi(`http://127.0.0.1:3000/${tipo}/${id}`,optionsUpdate)


    useEffect(()=>{
        if(updateError){
            console.log("Error ",updateDate)
        }

        if(!updateIsLoading){
            if(updateDate){
                console.log(updateDate[0])
              setName(tipo == "character" && updateDate[0] ? updateDate[0].name_character : updateDate[0].name_object)
              setDescription(tipo == "character" && updateDate[0].description_character ? updateDate[0].description_character : updateDate[0].description_object)

              setImage(tipo == "character" && updateDate[0] ? updateDate[0].img_character : updateDate[0].img_object)
              if(tipo == "games"){
                setDate( updateDate[0] ?
                    `${updateDate[0].date_released_game.year}/${updateDate[0].date_released_game.month}/${updateDate[0].date_released_game.day}`: ''
                )
              }
            }
          }
    },[updateDate,updateIsLoading,updateError])

    useEffect(()=>{
        setMarginTop("50%")
        const element = document.querySelector('.backgroundimage');
        if (element) {
            element.scrollTo(0, 0);
        }
    },[])
    

    const {data, isLoading, error } = useApi(options ? `http://127.0.0.1:3000/${tipo}/${id}`: null, options)

    const handlePressButton = () =>{
        if(name != '' && description != '' && image != ''){
            setOptions({
                method: 'PUT',
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
    })

    useEffect(() => {
        if(error){
            alert("Fallo en post", error)
        }
    
        if(data){
            alert("Se modifico el elemento")
            location.reload()
        }
    }, [data, error]);

    if (!isAdmin){
        return <AquiNoHayNada />
    }

    
    
    return (
        <div className="Post">
            <div>
                <h1 style={{color:"white"}}>Actualizar elemento</h1>
            </div>
            <div className="containerData">
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
                {tipo == "games" && (
                    <div className="tipoPost">
                        <p className="subtitlePost"> Ingrese la fecha en la que salio el juego</p>
                        <input className="inputTextValues" type="text" value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                )}
                <div className="tipoPost">
                    <button onClick={handlePressButton}>Actualizar</button>
                </div>
            </div>
        </div>
    )

};
    

export default UpdatePost