import GamesInfo from "../Pages/GamesInfo/GamesInfo"
import Login from "../Pages/Login/Login"
import MainScreen from "../Pages/MainScreen/MainScreen"
import CharactersInfo from "../Pages/PageInfo/CharactersInfo"
import CreatePost from "../Pages/CreatePost/CreatePost"


const Router = ({ruta, setRuta}) =>{

    if(ruta.includes('/Game')){
        console.log("ENTRO AQUI")
        const currentPath = window.location.pathname;
        const id = currentPath.split('/').pop();
        return <GamesInfo id={id} />
    }

    if(ruta.includes('/Character')){
        const currentPath = window.location.pathname;
        const id = currentPath.split('/').pop();
        return <CharactersInfo id={id} ruta={"character"}/>
    }

    if(ruta.includes('/Object')){
        const currentPath = window.location.pathname;
        const id = currentPath.split('/').pop();
        return <CharactersInfo id={id} ruta={"Object"}/>
    }

    switch (ruta){
        case "/Home":
            return <MainScreen setRuta={setRuta}/>
        case "/admin":
            return <Login />
        case "/Post":
            return <CreatePost />
        default:
            return <MainScreen />
    }
}

export default Router
