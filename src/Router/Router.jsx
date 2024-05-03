import GamesInfo from "../Components/GamesInfo"
import Login from "../Login"
import MainScreen from "../MainScreen"
import CharactersInfo from "../Components/CharactersInfo"


const Router = ({ruta}) =>{

    if(ruta.includes('/Game')){
        console.log("ENTRO AQUI")
        const currentPath = window.location.pathname;
        const id = currentPath.split('/').pop();
        return <GamesInfo id={id} />
    }

    if(ruta.includes('/Character')){
        const currentPath = window.location.pathname;
        const id = currentPath.split('/').pop();
        return <CharactersInfo id={id}/>
    }

    switch (ruta){
        case "/Home":
            return <MainScreen />
        case "/admin":
            return <Login />
        default:
            return <MainScreen />
    }
}

export default Router
