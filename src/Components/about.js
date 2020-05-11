import React from 'react';
import {avatar} from '../assests/images';
import Image from 'react-bootstrap/Image';
import {about} from '../assests/text';
// style={{backgroundImage:`url(${paper3})`}}
const About = () => {
    return ( 
        <div className="aboutDiv">
            <span className="headerInsta">
                About Me
                <br/>
                <Image style={{border:'1px solid'}} roundedCircle width={160} height={150} src={avatar}/>
            </span>
            <div className="description">{about}</div>
        </div> 
    );
}
 
export default About;