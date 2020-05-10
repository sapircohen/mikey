import React from 'react';
import FCHero from './Components/hero';
import Work from './Components/work';
import About from './Components/about';
//CSS:
import './css/styles.css';
import GetInTouch from './Components/contact';

function App() {
  return (
    <div className="main">
      <FCHero/>
      <Work title="Portfolio"/>
      <About/>
      {/* <GetInTouch/> */}
    </div>
  );
}

export default App;
