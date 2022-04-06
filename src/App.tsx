import { useEffect, useState, ChangeEvent } from 'react';

import { getData } from './utils/data.utils';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';
import '@fontsource/bigelow-rules';

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const defaultTitle = 'Monsters Rolodex';
  const [searchText, setSearchText] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [title, setTitle] = useState(defaultTitle);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    }

    fetchUsers();
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchText);
    });
    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchText]);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchTextString = e.target.value.toLowerCase();
    setSearchText(searchTextString);
  };

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const titleTextString = e.target.value;
    setTitle(titleTextString !== '' ? titleTextString : defaultTitle);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>{title}</h1>
      <SearchBox
        placeholder={'search monsters'}
        className={'monsters-search-box'}
        onChangeHandler={onSearchChange}
      />
      <SearchBox
        placeholder={'edit title'}
        className={'title-search-box'}
        onChangeHandler={onTitleChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
