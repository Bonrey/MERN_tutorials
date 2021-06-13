import React from 'react';
import '../App.scss';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';


const App = () => {
  return (
    <div>
      <h1>Application</h1>
      <Nav />
      <About />
      <Shop />
    </div>
  );
}
export default App;
