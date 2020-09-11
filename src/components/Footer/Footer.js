import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
                {/* footer list Know Us */}
                <div>
                    <h4>Go to Know Us</h4>
                    <ul>
                        <li><a href="/">Careers</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">About Amazon</a></li>
                        <li><a href="/">Investor Relations</a></li>
                        <li><a href="/">Amazon Devices</a></li>
                        <li><a href="/">Amazon Tours</a></li>
                    </ul>
                </div>
                {/* footer list make money with us  */}
                <div>
                    <h4>Make Money with Us</h4>
                    <ul>
                        <li><a href="/">Sell on Amazon</a></li>
                        <li><a href="/">Sell on Amazon Business</a></li>
                        <li><a href="/">Sell Your Apps on Amazon</a></li>
                        <li><a href="/">Become an Affiliate</a></li>
                        <li><a href="/">Advertise Your Products</a></li>
                        <li><a href="/">Self-Publish with Us</a></li>
                        <li><a href="/">Host an Amazon Hub</a></li>
                    </ul>
                    {/* Amazon Payment Products */}
                </div>
                <div className="footer__payment">
                    <h4>Amazon Payment Products</h4>
                    <ul>
                        <li><a href="/">Amazon Business Card</a></li>
                        <li><a href="/">Shop with Points</a></li>
                        <li><a href="/">Reload Your Balance</a></li>
                        <li><a href="/">Amazon Currency Converter</a></li>
                    </ul>
                </div>
                {/* Let us help you */}
                <div className="footer__help">
                    <h4>Let Us Help You</h4>
                    <ul>
                        <li><a href="/">Amazon and COVID-19</a></li>
                        <li><a href="/">Your Account</a></li>
                        <li><a href="/">Your Orders</a></li>
                        <li><a href="/">Returns & Replacements</a></li>
                        <li><a href="/">Shipping Rates & Policies</a></li>
                        <li><a href="/">Manage Your Content and Devices</a></li>
                        <li><a href="/">Amazon Assistant</a></li>
                        <li><a href="/">Help</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__final">
                <p>&copy; amazon-2021</p>
            </div>
        </div>
    )
}

export default Footer
