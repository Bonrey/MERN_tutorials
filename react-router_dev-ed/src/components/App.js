import React, { lazy, Suspense } from 'react';
import '../sass/index.scss';
import Nav from './Nav';
import About from './About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Countries = lazy(() => import('./Countries'));
const CountryDetail = lazy(() => import('./CountryDetail'));

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/about' component={About} />
            <Route path='/countries' exact component={Countries} />
            <Route path='/countries/:alpha3Code' component={CountryDetail} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

const HomePage = () => {
  return <h1>We're home!</h1>;
}


export default App;
