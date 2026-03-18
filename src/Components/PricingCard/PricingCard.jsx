import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {
    console.log(pricing)
    return (
        <div className='shadow-2xl border border-green-200-2 rounded-xl te p-5'>
            {/* card header */}
            <div>
                <h1 className='text-5xl'>{pricing.name}</h1>
                <p>{pricing.price}</p>

            </div>

            {/* card body */}
            <div className='mt-4 bg-gray-700 rounded-2xl mt-10 p-4'>
                <p className='font-bold '>{pricing.purpose}</p>
                {
                    pricing.features.map( (feature,index) => <PricingFeatures key={index} feature={feature}></PricingFeatures>)
                }

            </div>
            
        </div>
    );
};

export default PricingCard;