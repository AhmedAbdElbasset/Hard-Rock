import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Arraow from '../../images/icons8-arrow-left-60.png'
import Delete from '../../images/icons8-delete-48.png'
import DoneMark from '../../images/icons8-done.gif'
import './Cart.css'
import Close from '../../images/icons8-x-coordinate-50.png'
import { AddtoCart, decreaseCart, removeItem ,clearCart, getTotal, CheckOut} from '../../Store/CartSlice'
const CartDetails = (props) => {
    const dispatch = useDispatch()
    const cart=useSelector((state) => state.cart)
    useEffect(() => {
        dispatch(getTotal());
    }, [cart, dispatch])
    const [Done,setIsDone]=useState(false)
    const [isActive,setActive]=useState(true)
    const Active = props.className
    function closeHandler() {
        setActive(prevState=>!prevState)
    }
    const DecreasHandler = (item) => {
        dispatch(decreaseCart(item))
    }
    const removeHandler = (item) => {
        dispatch(removeItem(item))
    }
    
    const increaseHandler = (item) => {
        dispatch(AddtoCart(item))
    }
    
    const clearHandler = (item) => {
        dispatch(clearCart(item))
    }
    const CheckOutHandler = (cartData) => {
        dispatch(CheckOut(localStorage.getItem('cartItems')))
        setIsDone(prevState => !prevState)
        setTimeout(() => {
            setIsDone(false)
        },5000)
    }
    // const itemId=cart.cartItems.find(e=>e.id===7)
    // console.log(itemId)
    return (
        <div className={`CartDetails ${Active ? 'active' : ''}`}>
            <img src={Close} alt='' onClick={props.onActive}/>
            {cart.cartItems.length === 0 ? (
                <div className='cart-empaty'>
                    <p> Your Cart Is Currently empty</p>
                    <div className='Start-Shopping'>
                        <Link to='/Hard-Rock' >
                            <img src={Arraow} alt=''/>
                        <span>Start Shopping</span>
                        </Link>
                    </div>
                </div>
            ) :
                (<div className='container'>
                    <p className='title'>Your Shopping Cart</p>
                    <div className='cart-items'>
                        <div className='scroll'>
                        {cart.cartItems?.map((cartItem) =>
                            (<div className='cart-item' key={cartItem.id}>
                                <div className='cart-product'>
                                    <img src={cartItem.image} alt={cartItem.title} />
                                    <div className='details'>
                                        <span> {cartItem.title}</span>
                                        <button onClick={()=>removeHandler(cartItem)}> Remove</button>
                                    </div>
                                </div>
                                <div className='cart-quantity'>
                                    <button onClick={()=>DecreasHandler(cartItem)}>-</button>
                                    <div>{cartItem.cartQuantity}</div>
                                    <button onClick={()=>increaseHandler(cartItem)} className='blus'>+</button>
                                </div>
                                <span className='totlal-price'>${cartItem.price * cartItem.cartQuantity}</span>
                            </div>))}
                            </div>
                    </div>
                    <div className='clear'>
                        <img src={Delete} alt='delete' onClick={()=>clearHandler()}/>
                        <button onClick={()=>clearHandler()}>Clear</button>
                        </div>
                        <div className='checkOut'>
                            <div className='subtotal'>
                                <span>Subtotal :</span>
                                <span className='totlal'> ${cart.cartTotalAmount}</span>
                                <button onClick={CheckOutHandler}>Checkout</button>
                            </div>
                            <div className='continue-Shopping'>
                                <Link to='/Hard-Rock' >
                                    <img src={Arraow} alt=''/>
                                    <span>Continue Shopping</span>
                                </Link>
                            </div>
                        </div>
                </div>)}
            <div className={`${Done?'DoneMassege active':'DoneMassege'}`}>
                <div className='Done'>
                            <img src={DoneMark} alt=''/>
                </div>
                <p>Your Products on The Way</p>
                <Link to={'/trackOrder'}><p className='TO'>Track Your Order</p></Link>
            </div>
        </div>
    )
}

export default CartDetails
