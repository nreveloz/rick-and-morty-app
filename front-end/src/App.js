import './App.css';
import header from "./images/header-rick-and-morty.jpg";
import Cards from './components/Cards/Cards.jsx';
import Nav from "./components/Nav/Nav";
import {useEffect, useState} from "react";
import {Routes, Route, useLocation, useNavigate, Link} from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form"
import Favorites from "./components/Favorites/Favorites";
import SearchBar from "./components/SearchBar/SearchBar";
import axios from "axios";


function App() {

    const location = useLocation();
    const navigate = useNavigate();

    const [ characters, setCharacters ] = useState( []);

    const [ access, setAccess ] = useState(false);

    const login = (userData) => {
        axios.get("http://localhost:3001/rickandmorty/login", {
            params: {
                email : userData.username,
                password: userData.password
            }}).then(response => {
                const {access} = response.data
                if (access) {
                    setAccess(true);
                    navigate("/home");
                }
        })
    }

    useEffect( () => {    /// si los datos no coinciden te quedas en "/" login
        !access && navigate("/")
    } ,[access]);

    const onSearch = (character) => {
        fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
            .then((response) => response.json())
            .then((data) => {
                console.log("data: ", data)
                if (data.name) {
                    setCharacters((oldChars) => [...oldChars, data]);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            });
    };

    const randomSearch = () => {
        let random = Math.floor(Math.random() * (826)) + 1
        onSearch(random)
    }

    const onClose = (id) => {
        setCharacters(
            characters.filter(character => character.id !==  id)
        )
    };


    return (
        <div className='App' style={{height: characters.length > 0 ? "fit-content": "100%"}}>
            {
                location.pathname === "/" ?
                <div>
                    <figure>
                        <img src={header} alt="Rick and Morty" className="header"/>
                    </figure>
                    <Form login={login} />
                </div>
                    : <div>
                        <Nav/>
                        <figure>
                            <img src={header} alt="Rick and Morty" className="header"/>
                        </figure>
                    </div>
            }
            <div>
                {
                    location.pathname !== "/"?
                        <SearchBar onSearch={onSearch} randomSearch={randomSearch}/>
                        : null
                }
            </div>

            <Routes>
                <Route path='/home' element={
                    <Cards
                    onClose={onClose}
                    characters={characters}/>}
                />
                <Route path='/about' element={<About/>}/>
                <Route path='/detail/:detailId' element={<Detail/>}/>
                <Route path='/favorites' element={<Favorites/>}/>
            </Routes>
        </div>
    )
}

export default App;
