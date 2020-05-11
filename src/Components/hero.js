import React from 'react';
import LazyHero from 'react-lazy-hero';
import {yellowBackground,orangeBackground,paper,paper2,paper3} from '../assests/images'
import {FiInstagram,FiFacebook} from 'react-icons/fi'
import {FaWhatsapp} from 'react-icons/fa';
import {description} from '../assests/text';

const FCHero =() =>{
    return (
        <div style={{borderBottom:'1px solid black'}}>
            <LazyHero opacity={0.1} imageSrc={yellowBackground}>
                <span className="header" style={{fontFamily: 'Indie Flower, cursive',fontSize:'530%'}}>Mikey</span>
                <br/>
                <span style={{fontFamily: 'Indie Flower, cursive',fontSize:'150%'}}> graphic art</span>
                <br/>
                <span className="description">{description}</span>
                <br/>
                <br/>
                <span><FiFacebook color="#2F89FF" size={30}/> <FiInstagram color="#ED046B" size={30}/> <FaWhatsapp color="#45C152" size={30}/></span>
                <br/>
                <br/>
            </LazyHero>
        </div>
    );
}

export default FCHero