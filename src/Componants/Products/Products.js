import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AddtoCart } from '../../Store/CartSlice'
import './Products.css'
import addToCard from '../../images/icons8-shopping-cart-60.png'
const Products = (props) => {
    const dispatch=useDispatch()
    const addToCartHandler = (product) => {
        dispatch(AddtoCart(product))
    }
    return (
        <div id='Cartwrapper' className=' Cartwrapper'>
            <ul className='content'>
                {props.cartData.map((cart,i) => (
                    <li className='Cart' key={cart.id}>
                            <div className='view'>
                            <Link to={`/productDetails/${cart.id}`} >
                                view
                            </Link></div>
                            <img src={cart.image} alt='' />
                            <p className='title'> {cart.title}</p>
                            <span className='category'>{cart.category}</span>
                            <span className='price'> {cart.price} USD</span>
                            <button onClick={()=>addToCartHandler(cart)}>
                                <span >Add To Card</span>
                                <img src={addToCard} alt=''/>
                            </button>
                        </li>
            ))}
            </ul>
        </div>
    )
}

export default Products


