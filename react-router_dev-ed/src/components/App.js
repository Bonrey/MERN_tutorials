import React from 'react';
import '../sass/index.scss';
import styles from '../sass/App.module.scss';

import Nav from './Nav';
import About from './About';
import Shop from './Shop';


const App = () => {
  return (
    <div>
      <h1 className={styles.MainHeading}>Application</h1>
      <Nav />
      <About />
      <Shop />
    </div>
  );
}
export default App;
