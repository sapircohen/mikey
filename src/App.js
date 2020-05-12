import React from 'react';
import FCHero from './Components/hero';
import Work from './Components/work';
import About from './Components/about';
//CSS:
import './css/styles.css';
import SimpleMap from './Components/contact';

function App() {
  return (
    <div className="main">
      <FCHero/>
      <Work title="Portfolio"/>
      <About/>
      {/* <SimpleMap/> */}
    </div>
  );
}

export default App;
