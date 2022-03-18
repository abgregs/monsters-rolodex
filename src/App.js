import { useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import '@fontsource/bigelow-rules';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchText);
    });
    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchText]);

  const onSearchChange = (e) => {
    const searchTextString = e.target.value.toLowerCase();
    setSearchText(searchTextString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        placeholder={'search monsters'}
        className={'monsters-search-box'}
        onChangeHandler={onSearchChange}
      />
      <CardList users={filteredMonsters} />
    </div>
  );
};

export default App;
