import { Component } from 'react';
import './card.styles.css';

class Card extends Component {
  render() {
    const { name, email, id } = this.props.user;

    return (
      <div className='card-container'>
        <div className='card-section'>
          <img
            alt={`user ${name}`}
            src={`https://robohash.org/${id}?set=set3&size=180x180`}
          />
        </div>
        <div className='card-section'>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    );
  }
}

export default Card;
