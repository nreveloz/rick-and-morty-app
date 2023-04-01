import style from "./Card.module.css";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useState, useEffect} from "react";
import {addFavorites, deleteFavorites} from "../../redux/actions";

function Card({id, name, species, gender, image, onClose}) {

    const dispatch = useDispatch();
    const myFavorites = useSelector(state => state.myFavorites);
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavorite = () => {
        if (isFavorite) {
            setIsFavorite(false);
            dispatch(deleteFavorites(id));
        } else {
            setIsFavorite(true);
            dispatch(addFavorites({id, name, species, gender, image, onClose}))
        }
    }

    useEffect(() => {
        myFavorites.forEach((fav) => {
            if (fav.id === id) {
                setIsFavorite(true);
            }
        });
    }, [myFavorites]);

    return (
        <div className={style.divCard}>
            <div className={style.divButtons}>
                {
                    isFavorite ? (<button onClick={handleFavorite} className={style.buttonFav}>❤️</button>)
                        : (<button onClick={handleFavorite} className={style.buttonFav}>🤍</button>)
                }
                <button onClick={onClose} className={style.buttonCard}>X</button>
            </div>
            <Link to={`/detail/${id}`} style={{textDecoration: " #01b3cf solid underline"}}>
                <h2 className={style.CardH2}>{id}. {name}</h2>
            </Link>
            <h2 className={style.CardH2Species}>Specie: {species}</h2>
            <h2 className={style.CardH2Species}>Gender: {gender}</h2>
            <br/>
            <img src={image} alt={name} className={style.CardImg}/>
        </div>
    )
};

export default Card;
