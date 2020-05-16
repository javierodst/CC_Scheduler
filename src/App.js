import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Components/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>

      <body>

        <Switch>
          <Route exact path='/' render={() => <Home />} />
        </Switch>

      </body>
    </div>
  );
}

export default App;
