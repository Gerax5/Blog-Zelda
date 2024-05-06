import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import GamesInfo from "../Pages/GamesInfo/GamesInfo"
import Login from "../Pages/Login/Login"
import MainScreen from "../Pages/MainScreen/MainScreen"
import CharactersInfo from "../Pages/PageInfo/CharactersInfo"
import CreatePost from "../Pages/CreatePost/CreatePost"
import UpdatePost from '../Pages/update/UpdatePost'

const ENDPOINT_C = import.meta.env.VITE_ENDPOINT_C
const ENDPOINT_O = import.meta.env.VITE_ENDPOINT_O

function AppRouter() {

    return (
        <Router>
            <Routes>
                <Route path="/Update/:tipo/:id" element={<UpdatePost />} />
                <Route path="/Game/:id" element={<GamesInfo />} />
                <Route path="/Character/:id" element={<CharactersInfo ruta={ENDPOINT_C}/>} />
                <Route path="/Object/:id" element={<CharactersInfo ruta={ENDPOINT_O}/>} />
                <Route path="/Home" element={<MainScreen></MainScreen>} />
                <Route path="/admin" element={<Login />} />
                <Route path="/Post" element={<CreatePost />} />
                <Route path="/" element={<MainScreen></MainScreen>} />
                <Route path="*" element={<MainScreen />} />
            </Routes>
        </Router>
    );
}

export default AppRouter
