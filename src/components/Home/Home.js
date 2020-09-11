import React from 'react';
import './Home.css';
import Product from '../Product/Product';

function Home(props) {

    const {product, setProduct} = props;

    const addProduct = (intoProduct) => {
        const newProduct = [...product, intoProduct]
        setProduct(newProduct);
    }

	return (
		<div className="home">
			<img
                className="home__image"
				src="https://images-eu.ssl-images-amazon.com/images/G/03/digital/video/gateway/placement/launch/Lucifer_S5/LUCIF_S5_GWBleedingHero_FT_COVIDUPDATE_XSite_1500x600_PV_de-DE._CB407853206_.jpg"
				alt=""
			/>

            {/* Product id, title, price, rating, image  */}
            <div className="home_row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.SX325_B01,204,203,200_.jpg"
                    addProduct={addProduct}
                />
                <Product
                    id="12321341"
                    title="Portal from Facebook. Smart, Hands-Free Video Calling with Alexa Built-in…"
                    price={11.96}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61UMnjdFyQL._AC_SL1300_.jpg"
                    addProduct={addProduct}
                />
            </div>

            <div className="home_row">
                <Product
                    id="4903850"
                    title="Samsung LC49RG90SSUXEN 49' Curbed LED Gaming Monitor"
                    price={199.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    addProduct={addProduct}
                />
                <Product
                    id="23445930"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.96}
                    rating={4}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    addProduct={addProduct}
                />
                <Product
                    id="3254354345"
                    title="New Apple iPad Prod (12.9-inch, Wi-Fi)"
                    price={598.96}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    addProduct={addProduct}
                />
            </div>
            {/* Product */}
		</div>
	);
}

export default Home;
