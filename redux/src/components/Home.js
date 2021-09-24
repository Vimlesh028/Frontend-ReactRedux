import React from 'react'
import iphone12image from '../iphone12.jpeg'
import cart_icon from '../cart_icon.png'

const Home = (props) => {
    console.log("props : ", props)

    return (
        <div>
            <div className="add-to-cart">
                <img src={cart_icon} alt="cart_icon"></img>
            </div>
            Home Component
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src={iphone12image} alt="iphone12image"></img>
                </div>
                <div className="text-wrapper item">
                    <span>I-Phone 12</span><br />
                    <span>Price : Rs 78000</span>
                </div>
                <div className="btn-wrapper item">
                    <button
                        onClick={() => props.addToCartHandler({ price: 78000, name: "iphone12" })}
                    >Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home
