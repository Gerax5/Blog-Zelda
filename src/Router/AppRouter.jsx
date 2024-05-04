import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import GamesInfo from "../Pages/GamesInfo/GamesInfo"
import Login from "../Pages/Login/Login"
import MainScreen from "../Pages/MainScreen/MainScreen"
import CharactersInfo from "../Pages/PageInfo/CharactersInfo"
import CreatePost from "../Pages/CreatePost/CreatePost"

function AppRouter() {

    return (
        <Router>
        <Routes>
            <Route path="/Game/:id" element={<GamesInfo />} />
            <Route path="/Character/:id" element={<CharactersInfo ruta="character" />} />
            <Route path="/Object/:id" element={<CharactersInfo ruta="Object" />} />
            <Route path="/Home" element={<MainScreen></MainScreen>} />
            <Route path="/admin" element={<Login />} />
            <Route path="/Post" component={<CreatePost />} />
            <Route path="/" element={<MainScreen></MainScreen>} />
        </Routes>
        </Router>
    );
}

export default AppRouter