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
                <span>
                    <FiFacebook onClick={()=>window.open("https://www.facebook.com/michael.bracha.96","_blank")} color="#2F89FF" size={35}/>  &nbsp;
                    <FiInstagram onClick={()=>window.open("https://www.instagram.com/mikey_bracha/","_blank")} color="#ED046B" size={35}/>  &nbsp;
                    <FaWhatsapp color="#45C152" onClick={()=>window.open("https://api.whatsapp.com/send?phone=972548107272")} size={35}/>
                </span>
                <br/>
                <br/>
            </LazyHero>
        </div>
    );
}

export default FCHero