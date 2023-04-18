import React from 'react';
import './TShirt.css';

const TShirt = ({tshirt, handleAddToCart}) => {
    const {picture, name, price} = tshirt;
    return (
        <div className='t-shirt mx-auto xl:w-[280px] lg:w-[250px] md:w-[220px] w-[100%]'>
            <img className='w-full' src={picture} alt=""></img>
            <h2>{name}</h2>
            <h4>Price: {price}</h4>
            <button className='btn bg-blue-600 p-2 text-white font-bold rounded' onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;