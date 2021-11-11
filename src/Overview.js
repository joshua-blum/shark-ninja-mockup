import React, { useEffect } from 'react'; 
import {useSelector, useDispatch} from 'react-redux';
import {productOverview} from './actions';
import blender from './images/blender.jpeg';


export default function Overview(){
    const dispatch = useDispatch();
    const productData = useSelector(state => state.overview);

    const tagGenerator = (tags) => {
        return tags.map((tag) => <li>{tag}</li> );
    }

    useEffect(() => {
        dispatch(productOverview());
    }, [dispatch])

    return (
        <>
        <img src={blender} alt='Shark Ninja' />
        <div className='product-info'>
            <h4 className='product-info-title'>{productData.title}</h4>
            <p className='product-info-subtitle'>{productData.subtitle}</p>
        </div>
        <ul className='product-tags'>
            {tagGenerator(productData.tags)}
        </ul>
        </>
    )
}