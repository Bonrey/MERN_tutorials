import React from 'react';
import '../sass/index.scss';
import Nav from './Nav';
import About from './About';
import Countries from './Countries';
import CountryDetail from './CountryDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/about' component={About} />
          <Route path='/countries' exact component={Countries} />
          <Route path='/countries/:alpha3Code' component={CountryDetail} />
        </Switch>
      </div>
    </Router>
  );
}

const HomePage = () => {
  return <h1>We're home!</h1>;
}


export default App;
