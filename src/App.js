import { useState } from 'react';
import Search from './components/Search';
import List from './components/List';
import useDebounce from './hooks/useDebounce';
import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 1000);  // higher order function

  return (
    <>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <List searchTerm={debouncedSearchValue} />
    </>
  )
}

export default App;
