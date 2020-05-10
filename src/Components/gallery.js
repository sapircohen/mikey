import React from 'react';
import Gallery from "react-photo-gallery";

const WorkGallery = (props) => {
    return ( 
        <Gallery photos={props.photos}/>
     );
}
 
export default WorkGallery;
