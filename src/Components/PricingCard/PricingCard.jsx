import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {
    // console.log(pricing)
    return (
        <div className='flex flex-col '>
            {/* card header */}
            <div>
                <h1 className='text-5xl'>{pricing.name}</h1>
                <p>{pricing.price}</p>

            </div>

            {/* card body */}
            <div className='mt-4 bg-gray-700 rounded-2xl mt-10 p-4 flex-1'>
                <p className='font-bold '>{pricing.purpose}</p>
                {
                    pricing.features.map( (feature,index) => <PricingFeatures key={index} feature={feature}></PricingFeatures>)
                }

            </div>
            <button className="btn w-full text-black bg-white border-2 border-gray-400 mt-8 ">Subscribe</button>
            
        </div>
    );
};

export default PricingCard;