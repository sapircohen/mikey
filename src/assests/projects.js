import React from 'react';
import {TiArrowForwardOutline} from 'react-icons/ti'
import {insta1,insta2,insta3,insta4,insta5,insta6,insta7,insta8,insta9,b1,b2,b3} from './images';

export const projects = [
    {
        thumbnail:insta9,
        tags:['instagram'],
        title:`My Work on Instagram & Facebook +`,
        icons:<TiArrowForwardOutline/>,
        pics:[insta1,insta2,insta3,insta4,insta5,insta6,insta7,insta8,insta9],
        tags:['#story','#post','#cover']
    },
    {
        thumbnail:b3,
        tags:['Bussiness card'],
        title:'Bussiness Cards +',
        icons:<TiArrowForwardOutline/>,
        pics:[b1,b2,b3],
        tags:[]
    }
]