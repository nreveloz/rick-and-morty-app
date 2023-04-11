import Card from '../Card/Card';
import style from './Cards.module.css';


function Cards(props) {
   const { characters, onClose } = props;
   return(
       <div className={style.divCards}>
          {
             characters.map(({id, origin, status, name, species, gender, image}) => {
                return <Card
                    key={id}
                    id={id}
                    name={name}
                    origin = {origin}
                    status = {status}
                    species={species}
                    gender={gender}
                    image={image}
                    onClose={() => onClose(id)}
                />
             })
          }
       </div>
   )
}

export default Cards;