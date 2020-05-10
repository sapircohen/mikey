import React from 'react';
import Projects from './projects';
// import {orangeBackground,blueAndGray,paper3} from '../assests/images'

const PresentWork = ({title}) => {
    return ( 
        <div className="workDiv" style={{background:"#D4D3CF",textAlign:'center',border:'0.1px solid'}}>
            <span className="headerInsta">
                {title} 
            </span>
            <div>
                <Projects/>
            </div>
        </div>
     );
}
 
export default PresentWork;