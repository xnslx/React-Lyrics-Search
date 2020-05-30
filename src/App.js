import React from 'react';
import './App.css';
import Nav from './Nav/Nav';
import Lyrics from './Lyrics/Lyrics';
import SearchInput from './SearchInput/SearchInput';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
library.add(faArrowRight);

const App = () => {
  return (
    <div className="App">
      <Nav />
      <SearchInput />
      <Lyrics />
    </div>
  );
}

export default App;
