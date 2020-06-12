import React from 'react';
import './App.css';
import {LyricContextProvider} from './Context/Context';
import {Switch, Route} from 'react-router-dom';
import LyricDetail from './LyricDetail/LyricDetail';
import Main from './Main/Main';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
library.add(faArrowRight, faArrowLeft);

const App = () => {
  return (
    <LyricContextProvider>
      <Switch>
        <Route path='/lyrics/:id' component={LyricDetail}/>
        <Route path='/' component={Main}/>
      </Switch>
    </LyricContextProvider>
  );
}


export default App;
