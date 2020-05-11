import React from 'react';
import {TiArrowForwardOutline} from 'react-icons/ti'
import {insta1,insta2,insta3,insta4,insta5,insta6,insta7,insta8,insta9,b1,b2,b3} from './images';

export const projects = [
    {
        thumbnail:insta9,
        tags:['instagram'],
        title:`Social Networks +`,
        icons:<TiArrowForwardOutline/>,
        pics:[{src:insta1,text:'instagram story'},{src:insta2,text:'instagram story'},{src:insta3,text:'instagram story'},{src:insta4,text:'instagram story'},{src:insta5,text:'instagram story'},{src:insta6,text:'instagram story'},{src:insta7,text:'instagram story'},{src:insta8,text:'instagram story'},{src:insta9,text:'instagram story'}],
        tags:['#Instagram','#Facebook','#Stories','#Posts','#Covers']
    },
    {
        thumbnail:b3,
        tags:['Bussiness card'],
        title:'Bussiness Cards +',
        icons:<TiArrowForwardOutline/>,
        pics:[{src:b1,text:'Bussiness card'},{src:b2,text:'Bussiness card'},{src:b3,text:'Birthday card'}],
        tags:['#Bussiness','#Birhday','#Cards']
    }
]