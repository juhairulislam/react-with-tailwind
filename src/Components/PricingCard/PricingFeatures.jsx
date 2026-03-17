import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({feature}) => {
    console.log(feature)
    return (
       <p className='flex gap-2 mt-3'> <CircleCheckBig></CircleCheckBig> {feature}</p>
    );
};

export default PricingFeatures;