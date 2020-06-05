import React from 'react';
import './App.css';
// import Nav from './Nav/Nav';
import {LyricContextProvider} from './Context/Context';
import {Switch, Route} from 'react-router-dom';
// import LyricList from './LyricList/LyricList';
import LyricDetail from './LyricDetail/LyricDetail';
import Main from './Main/Main';
import SearchedLyricsDetail from './SearchedLyricsDetail/SearchedLyricsDetail';
// import SearchInput from './SearchInput/SearchInput';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
library.add(faArrowRight, faArrowLeft);

// const App = () => {
//   return (
//     <LyricContextProvider>
//       <div className="App">
//         <Nav />
//         <SearchInput />
//         <LyricList />
//       </div>
//     </LyricContextProvider>
//   );
// }

const App = () => {
  return (
    <LyricContextProvider>
      <Switch>
        <Route path='/lyrics/:id' component={LyricDetail}/>
        <Route path='/songs/:id' exact component={SearchedLyricsDetail} />
        <Route path='/' component={Main}/>
      </Switch>
    </LyricContextProvider>
  );
}


export default App;
