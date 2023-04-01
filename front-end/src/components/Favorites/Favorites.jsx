import  { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./Favorites.module.css";
import { useDispatch } from "react-redux";
import { orderCards, filterCards, seeAllFav } from "../../redux/actions";



const Favorites = () =>  {

    const dispatch = useDispatch();
    const myFavorites = useSelector( state => state.myFavorites);

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div>
            <div className={style.headerFav}>
                < select defaultValue={"DEFAULT"} onChange={handleOrder} className={style.selectFav}>
                    <option value="DEFAULT" disabled="disabled">Order By</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select defaultValue={"DEFAULT"} onChange={handleFilter} className={style.selectFav}>
                    <option value="DEFAULT" disabled="disabled">Filter By</option>
                    <option value="Male" >Male</option>
                    <option value="Female">Female</option>
                    <option value="unknown">Unknown</option>
                    <option value="Genderless">Genderless</option>
                </select>
                <div>
                    <button onClick={()=> dispatch(seeAllFav())} className={style.selectFav}>All Favorites</button>
                </div>
            </div>

            <div className={style.divFav} >
            {
                myFavorites?.map((character) => {
                    return (
                        <div className={style.favCard} key={character.id}>
                            <Link to={`/detail/${character?.id}`} style={{textDecoration: "none"}}>
                                <h2 className={style.favH2}>{character?.id}. {character?.name}</h2>
                            </Link>
                            <h2 className={style.favH2Species}>Specie: {character?.species}</h2>
                            <h2 className={style.favH2Species}>Gender: {character?.gender}</h2>
                            <img  src={character?.image} alt={character?.name} className={style.favImg}/>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Favorites;