import React from 'react';

import protectedContentWrapper 
    from '../components/ProtectedContent';

function Offer(props) {
    console.log(' offer props ', props);

    return (
        <div style = { {background: props.background} }> 
            <p>Price: 23453</p>
            <p>Coupon: 2020, Discount, 60% offer</p>
        </div>
    )
}

const ProtectedOffer = protectedContentWrapper(Offer);

export default function ProductDetail(props) {
    return (
        <div>
            <h2>Product Details</h2>

            <h4>Apple iPhone</h4>

             <ProtectedOffer  background = "lightblue" />
        </div>
    )
}