import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Header from './Components/Header.js';
import LandingPage from './Components/LandingPage.js';
import Home from './Components/Home/Home';
import Schedule from './Components/Schedule.js';
import EmployeeCreate from './Components/Employee/EmployeeCreate.js'
import EmployeeEdit from './Components/Employee/EmployeeEdit.js';
import { ProtectedRoute } from './protectedRoute';
import './Styling/App.css';
import auth from './auth.js';


function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Switch>
          < Header />
        </Switch>


      </header>

      <Switch>
        <Route exact path='/' render={() => <LandingPage />} />

        <ProtectedRoute exact path='/home' component={Home} />
        <Route exact path='/schedule/:id' render={(props) => (<Schedule id={props.match.params.id} />)} />
        <Route exact path='/schedule/edit/:id' render={(props) => (<Schedule id={props.match.params.id} />)} />


        <Route exact path='/employee/add/:date' render={(props) => (<EmployeeCreate date={props.match.params.date} />)} />
        <Route exact path='/employee/edit/:id' render={(props) => (<EmployeeEdit id={props.match.params.id} />)} />



        <Route render={() => (<h1>Page Not Found</h1>)} />
        <Route path="*" render={() => (<h1>Page Not Found</h1>)} />
      </Switch>

    </div>

  );
}




export default withRouter(App);



