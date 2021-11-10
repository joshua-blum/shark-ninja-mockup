import React from 'react';
import blender from './images/blender.jpeg';


export default function Overview(){
    const data = require('./stackline_frontend_assessment_data_2021.json');

    const tagGenerator = (tags) => {
        return tags.map((tag) => <li>{tag}</li> );
    }

    return (
        <>
        <img src={blender} alt='Shark Ninja' />
        <div className='product-info'>
            <h4 className='product-info-title'>{data[0].title}</h4>
            <p className='product-info-subtitle'>{data[0].subtitle}</p>
        </div>
        <ul className='product-tags'>
            {tagGenerator(data[0].tags)}
        </ul>
        </>
    )
}