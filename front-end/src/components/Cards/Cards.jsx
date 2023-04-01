import Card from '../Card/Card';
import style from './Cards.module.css';


function Cards(props) {
   const { characters, onClose } = props;
   return(
       <div className={style.divCards}>
          {
             characters.map(({id, name, species, gender, image}) => {
                return <Card
                    key={id}
                    id={id}
                    name={name}
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