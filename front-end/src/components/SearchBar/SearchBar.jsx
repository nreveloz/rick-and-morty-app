import style from "./SearchBar.module.css";
import {useState} from "react";

function SearchBar({onSearch, randomSearch}) {

    const [character, setCharacter] = useState("");

    const handleOnChange = (event) => {
        setCharacter(event.target.value);

    }


    return (
        <div className={style.divSearchBar}>
            <input type='search' placeholder=" Find your character by id"
                   className={style.inputSearchBar} value={character}
                   onChange={handleOnChange}/>
            <button onClick={() => {onSearch(character); setCharacter("")}} className={style.buttonSearchBar}>Search</button>
            <button onClick={() => randomSearch()} className={style.buttonSearchBar}>Random Search</button>
        </div>
    );
}

export default SearchBar;
