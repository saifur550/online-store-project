import React from 'react';
import './Shop.css'

const Shop = () => {
    return (
        <div className='shop-container'>
            <div className="products-container">
                <h3 className="product-heading">This is products</h3>
            </div>
            <div className="cart-container">
                <h4 className="cart-summary">This is cart summary</h4>
            </div>
        </div>
    );
};

export default Shop;