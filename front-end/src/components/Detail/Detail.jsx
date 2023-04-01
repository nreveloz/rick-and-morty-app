import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import style from "./Detail.module.css";


const Detail = () => {
    const { detailId } = useParams();
    const [ character, setCharacter ] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                console.log("local server response on detail : ", char)
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                console.log(err)
                window.alert("No hay personajes con ese ID");
            });
        //return setCharacter({});
    }, [detailId]);

    return(
        <div className={style.divDetail} >
            <div>
                <h2 className={style.h2CharacterDetail}>{character?.name}</h2>
            </div>
            <div className={style.divInfoCharacterDetail} >
                <table>
                    <tr>
                        <th className={style.thInfoCharacterDetail1}>
                            <p>Status: </p>
                            <p>Specie: </p>
                            <p>Gender: </p>
                            <p>Origin: </p>
                            <p>Location:  </p>

                        </th>
                        <th className={style.thInfoCharacterDetail2}>
                            <p>{character?.status}</p>
                            <p>{character?.specie}</p>
                            <p>{character?.gender}</p>
                            <p>{character?.origin}</p>
                            <p> {character?.location}</p>

                        </th>
                        <th>
                            <img src ={character?.image} alt={character?.name} className={style.detailImg}/>
                        </th>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Detail;