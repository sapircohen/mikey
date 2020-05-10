import React from 'react';
import {avatar} from '../assests/images';
import Image from 'react-bootstrap/Image';
// style={{backgroundImage:`url(${paper3})`}}
const GetInTouch = () => {
    return ( 
        <div  className="aboutDiv">
            <span className="headerInsta">
                Get in touch
            </span>
            <div>
                <Image style={{border:'1px solid',margin:'25px'}} roundedCircle width={160} height={150} src={avatar}/>
            </div>
        </div> 
    );
}
 
export default GetInTouch;