import { createSlice } from '@reduxjs/toolkit';
import {toast} from 'react-toastify'
const initialState = {
    cartItems: localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[],
    cartTotalQuantaity: 0,
    cartTotalAmount:0
}
const CartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        AddtoCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {

                state.cartItems[itemIndex].cartQuantity += 1
                toast.info(`Product Quantity Increased`, {
                    position:'bottom-left'
                })
            }
            else {
                const tempProduct={...action.payload,cartQuantity:1}
                state.cartItems.push(tempProduct)
                toast.success(`New Product Added To Cart `, {
                    position:'bottom-left'
                })
                
            }
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        },
        removeItem(state, action) {
            const nextCartItem=state.cartItems.filter(
                cartItem=>cartItem.id!==action.payload.id
                )
                state.cartItems = nextCartItem
                localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
                toast.error(`Product Removed`, {
                    position:'bottom-left',
                })
            },
        decreaseCart(state, action) {
                const itemIndex = state.cartItems.findIndex(
                    (item) => item.id === action.payload.id
                    );
            
                    if (state.cartItems[itemIndex].cartQuantity > 1) {
                    state.cartItems[itemIndex].cartQuantity -= 1;
            
                    toast.info("Decreased product quantity", {
                        position: "bottom-left",
                    });
                    } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                    const nextCartItems = state.cartItems.filter(
                        (item) => item.id !== action.payload.id
                    );
            
                    state.cartItems = nextCartItems;
            
                    toast.error("Product removed from cart", {
                        position: "bottom-left",
                    });
                    }
            
                    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        clearCart(state, action) {
            state.cartItems = []
            toast.error("Cart Cleared", {
                position: "bottom-left",
            });
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        getTotal(state, action) {
            let {total,quantity}=state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem
                const itemTotal = price * cartQuantity
                
                cartTotal.total = itemTotal
                cartTotal.quantity += cartQuantity
                
                return cartTotal
            }, { total: 0, quantity: 0 })
            state.cartTotalQuantaity = quantity
            state.cartTotalAmount = total
        },
        getQuantity(state, action) {
            
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.Data.id)
            state.cartItems[itemIndex].cartQuantity=action.payload.Count
        },
        CheckOut(state, action) {
            localStorage.setItem('checkOutList',action.payload)
            state.cartItems = []
            toast.error("Cart Cleared", {
                position: "bottom-left",
            });
        }
        , CancelOrder(state, action) {
            let productsList = localStorage.getItem('checkOutList')
                productsList = []
            toast.error("Order Canceled", {
                position: "bottom-left",
            });
            localStorage.setItem("checkOutList", JSON.stringify(productsList));
        }
    }
})
export const { AddtoCart, removeItem, decreaseCart, clearCart, getTotal,getQuantity,CheckOut,CancelOrder } = CartSlice.actions

export default CartSlice.reducer;