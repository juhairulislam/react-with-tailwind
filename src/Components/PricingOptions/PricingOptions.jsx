import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {

    const pricingData = use(pricingPromise) ;
    console.log(pricingData)
    return (
      <div>
        <h2 className='text-5xl text-center mt-10'>Get Our MemberShip </h2> 
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
            {
                pricingData.pricingPlans.map(pricing=><PricingCard pricing={pricing}
                key={pricing.id}></PricingCard>)
            }
        </div>

      </div>
    );
};

export default PricingOptions;