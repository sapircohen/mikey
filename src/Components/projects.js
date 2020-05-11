import React, { useState, useEffect } from 'react';
import {TaggedContentCard,RecipeCard,NewsHeaderCard} from 'react-ui-cards'
import {projects} from '../assests/projects';
import ImageModal from '../Components/imageModal';

const Projects = (props)=>{
    const [modal,setModal] = useState(false);
    const [pictures,setPictures] = useState([]);
    const openModal=(pics)=>{
        setPictures([...pics]);
    }
    useEffect(()=>{
        if(pictures.length!==0) setModal(true);
    },[pictures])
    return(
        <div className="projects">
            {
                projects.map((proj,key)=>
                <div  key={key} style={{cursor:'pointer',textAlign:'center'}} onClick={()=>openModal(proj.pics)}>
                    <NewsHeaderCard 
                        thumbnail={proj.thumbnail}
                        title={proj.title}
                        tags={proj.tags}
                    />
                </div>
                )
            }
            <ImageModal images={pictures} closeModal={()=>setModal(false)} isOpen={modal}/>
        </div>
    )
}

export default Projects;