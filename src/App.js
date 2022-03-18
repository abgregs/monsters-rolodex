import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchText: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log('componentDidMount...', this.state);
          }
        )
      );
  }

  onSearchChange = (e) => {
    const searchText = e.target.value.toLowerCase();
    this.setState(() => {
      return {
        searchText,
      };
    });
  };

  render() {
    const { monsters, searchText } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchText);
    });

    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={onSearchChange}
        />
        <CardList users={filteredMonsters} />
      </div>
    );
  }
}

export default App;
