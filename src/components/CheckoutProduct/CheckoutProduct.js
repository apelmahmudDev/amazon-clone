import React from 'react';
import './CheckoutProduct.css';

function CheckoutProduct(props) {
    
    const {image, title, price, rating} = props.product;
    return (
        <div>
            <div className="checkout__product">
                {/* checkout ads banner on the top  */}
                <div className="checkout__image">
                    <img src={image} alt=""/>
                </div>
                {/* checkout description */}
                <div className="checkout__description">
                    <h3 className="checkout__title">{title}</h3>
                    <div className="checkout__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </div>
                    <div className="checkout__rating">
                        {Array(rating)
                            .fill()
                            .map((_) => (
                                <p>⭐️</p>
                            ))
                        }
                </div>
                    <button className="checkout__removeBtn">Remove from basket</button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
