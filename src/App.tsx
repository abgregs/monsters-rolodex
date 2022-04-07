import { useEffect, useState, ChangeEvent, MouseEvent } from 'react';

import { getData } from './utils/data.utils';

import CardList from './components/card-list/card-list.component';
import InputBox from './components/input-box/input-box.component';

import './App.css';

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const defaultTitle = 'Monsters Rolodex';
  const [searchText, setSearchText] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [title, setTitle] = useState(defaultTitle);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setMonsters(users);
    };

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

  const clearSearch = (event: MouseEvent): void => {
    setSearchText('');
  };

  const clearTitle = (event: MouseEvent): void => {
    setTitle(defaultTitle);
  };

  return (
    <div className='App'>
      <div className='container'>
        <header className='header'>
          <InputBox
            placeholder={'edit title'}
            className={'title-search-box'}
            onChangeHandler={onTitleChange}
            onClearHandler={clearTitle}
            hasInput={title !== defaultTitle}
            inputValue={title === defaultTitle ? '' : title}
          />
          <h1 className='app-title'>{title}</h1>
        </header>
        <section className='monsters-search-container'>
          <InputBox
            placeholder={'search monsters'}
            className={'monsters-search-box'}
            onChangeHandler={onSearchChange}
            onClearHandler={clearSearch}
            isSearch={searchText === ''}
            hasInput={searchText !== ''}
            inputValue={searchText}
          />
          <CardList monsters={filteredMonsters} />
        </section>
      </div>
    </div>
  );
};

export default App;
