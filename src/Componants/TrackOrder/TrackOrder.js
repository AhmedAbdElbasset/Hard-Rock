import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './TrackOrder.css'
import Photo from '../../images/Charity market-pana.png'
import { CancelOrder } from '../../Store/CartSlice'
function TrackOrder() {
    const dispatch=useDispatch()
    const randomNumber=Math.random().toFixed(5)*100000
    const CheckOutList = JSON.parse(localStorage.getItem('checkOutList'))
    function cancelOrderHandler(items){
        dispatch(CancelOrder(items))
        console.log("Done")
    }
    return (
        <div className='TrackOrder' >
            {CheckOutList.length === 0 ? (
                <div className='empty'>
                    <img src={Photo} alt='market' />
                    <p> There Is No Products yet</p>
                </div>
            ) : (<div className='CheckOut'>
                    <p className='orderId'>Order Id : {Math.ceil(randomNumber)}</p>
                    <div className='Products'>
                        <div className='Scroll'>
                            {CheckOutList.map((product) => (
                            <div>
                            <div className='Box' key={product.id}>
                                <img src={product.image} alt={product.title} />
                                <span className='Title'>{product.title}</span>
                                <span className='Price'>$ {product.price}</span>
                                <span className='Quantity'>Quan : {product.cartQuantity}</span>
                                    </div>
                        </div>
                ))}
                        </div>

                    </div>
                    <div className={`footer`}>
                    <div className='Payment'>
                    <p>Payment</p>
                    <span>Cash</span>
                </div>
                <div className={`finish `}>
                    <p>On Your Way</p>
                    <button onClick={()=>cancelOrderHandler()}>Canel Order</button>
                            </div>
                        </div>
            </div>)}
        </div>
    )
}

export default TrackOrder
