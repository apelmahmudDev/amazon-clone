import React from 'react';
import './Checkout.css';
import { Link } from 'react-router-dom';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';

function Checkout(props) {
    const product = props.product;
    
    const totalProductPrice = product.reduce((total, pd) => total + pd.price, 0);

    return (
        // checkout
        <div className="checkout">
            <div className="checkout__top">
                {/* Checkout ads banner  */}
                <img className="checkout__ads" src="https://images-eu.ssl-images-amazon.com/images/G/31/digital/music/merch/India/2017/Weekly/0912/Download_the_apps_music_india_hero.jpg" alt=""/>
                <div className="checkout__cart">
                    <div className="cart__subtotal">
                        <strong>Subtotal ({product.length} items): </strong>
                        <strong>${Number(totalProductPrice).toFixed(2)}</strong>
                    </div>
                    <form>
                        <input type="checkbox" name="gift" value="gift" id="gift"/>
                        <label htmlFor="gift"> This order contains a gift</label>
                    </form>
                    <button>Proceed to Checkout</button>
                </div>
            </div>
            { product.length > 0 ?
                <h2>Your Shopping Basket </h2>:
                <h2>Your Shoping Basket is empty 
                    <Link to="/">
                        <small style={{marginLeft:'10px'}}>Keep shopping</small>
                    </Link>
                </h2>
                
            }

            {/* Checkout Product */}
            {
                product.map((pd => <CheckoutProduct product={pd}></CheckoutProduct>))
            }
        </div>
    )
}

export default Checkout
