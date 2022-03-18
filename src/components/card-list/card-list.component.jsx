import { Component } from 'react';
import './card-list.styles.css';

class CardList extends Component {
  render() {
    const { users } = this.props;

    return (
      <div className='card-list'>
        {users.map((user) => {
          const { name, email, id } = user;
          return (
            <div className='card-container' key={id}>
              <div className='card-section'>
                <img
                  alt={`user ${user.name}`}
                  src={`https://robohash.org/${user.id}?set=set3&size=180x180`}
                />
              </div>
              <div className='card-section'>
                <h2>{name}</h2>
                <p>{email}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
