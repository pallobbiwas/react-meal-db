import React from 'react';
import './Details.css';

const Details = ({product}) => {

    return (
        <div className='info'>
            <h1>Details</h1>
            <hr />
            <p>product quantity:12</p>
            <p>Price: {1200}</p>
            <p>Txx: {120}</p>
            <hr />
            <p>Total: {1340}</p>
        </div>
    );
};

export default Details;