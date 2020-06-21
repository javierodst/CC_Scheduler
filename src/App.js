import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Components/Home/Home';
import Schedule from './Components/Schedule.js';
import EmployeeCreate from './Components/Employee/EmployeeCreate.js'
import EmployeeEdit from './Components/Employee/EmployeeEdit.js';
import './Styling/App.css';


function App() {
  return (

    <div className="App">
      <header className="App-header">

      </header>

      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/schedule/:id' render={(props) => (<Schedule id={props.match.params.id} />)} />
        <Route exact path='/schedule/edit/:id' render={(props) => (<Schedule id={props.match.params.id} />)} />


        <Route exact path='/employee/add' render={() => (<EmployeeCreate />)} />
        <Route exact path='/employee/edit/:id' render={(props) => (<EmployeeEdit id={props.match.params.id} />)} />



        <Route render={() => (<h1>Page Not Found</h1>)} />
      </Switch>

    </div>

  );
}




export default App;
/*
Header = () => {
  return (
    <div>

    </div>
  );
};

*/