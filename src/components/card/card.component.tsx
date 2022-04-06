import { Monster } from '../../App';
import './card.styles.css';

type CardProps = {
  monster: Monster;
}

const Card = ({ monster }: CardProps) => {
  const { name, email, id } = monster;

  return (
    <div className='card-container'>
      <div className='card-section'>
        <img
          alt={`user ${name}`}
          src={`https://robohash.org/${id}?set=set6&size=180x180`}
        />
      </div>
      <div className='card-section'>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
