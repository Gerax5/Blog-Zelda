import Login from "../Login"
import MainScreen from "../MainScreen"


const Router = ({ruta}) =>{
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
