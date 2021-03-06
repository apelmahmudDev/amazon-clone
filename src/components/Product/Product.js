import React from 'react';
import './Product.css';

function Product(props) {
    
    const {id, title, price, image, rating, addProduct} = props;
    const product = {id, title, price, image, rating}

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐️</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={()=> addProduct(product)}>Add to basket</button>
        </div>
    )
}

export default Product
