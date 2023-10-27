import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router'
import { useDispatch,useSelector } from 'react-redux'
import Header from '../Header/Header'
import './productDetails.css'
import card from '../../images/productDetails-shopping-cart-60.png'
import { AddtoCart, getQuantity } from '../../Store/CartSlice'
const ProductDetails = () => {
    const cart=useSelector(state=>state.cart)
    const dispatch=useDispatch()
    const [Amount, setAmount] = useState(1)
    const [ProductData,setProductData]=useState([])
    const { id: productId } = useParams()
    const loadProductData = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
        const Data =await response.json()
        return setProductData([Data])
    }

    const id = parseInt(productId)
        // const itemId = cart.cartItems.find(cartitem => cartitem.id === id)
        // const Itemamount=itemId.cartQuantity
        // console.log(Itemamount)
    useEffect(() => {
        loadProductData()
    }, [])
    // if (cart.cartItems.length ===0 ) {
    //     return 
    // }
    // else if(cart.cartItems.length >0) {
    //     const itemId = cart.cartItems.find(cartitem => cartitem.id === id)
    //     const Itemamount=itemId.cartQuantity
    //     console.log(Itemamount)
        
    // }
    const addToCartHandler = (product) => {
        if (Amount === String) {
            return
        }
        setAmount(0)
        countHandler()
        dispatch(AddtoCart(product))
        dispatch(getQuantity({
            Data: ProductData[0],
            Count:Amount
        }))
    }
    const increaseHandler = (item) => {
        dispatch(AddtoCart(item))
    }
    const plusHandler = () => {
        if (Amount >=9) {
            return;
        }
        setAmount(Amount+1)
    }
    const minusHandler = () => {
        if (Amount <=0) {
            return;
        }
        setAmount(Amount - 1)
    }
    const countHandler = (count) => {
        const remainingAmount = count - Amount
        return remainingAmount
    }
    return (
    <React.Fragment>
        <Header />
            {ProductData.map((data) => (
                    <React.Fragment>
                    <div className='product' key={data.id}>
                        <img src={data.image} alt='' />
                        <div className='details'>
                        <p className='title'>{data.title}</p>
                        <span className='des'>{data.description}</span>
                        <p className='rate'>Rate : {data.rating.rate}</p>
                        <span className='price'> Price : {data.price} USD</span>
                        <div className='size'>
                            <p>Availbale Size</p>
                            <button>S</button>
                            <button>M</button>
                            <button>L</button>
                            <button>XL</button>
                            </div>
                            <div className='count'>
                                <p className='count' >Select Your Amount</p>
                                <span className='plus' onClick={plusHandler}>+</span>
                                <input type='text' value={Amount}/>
                                <span className='minus' onClick={minusHandler}>-</span>
                                <p className='remaining'> Remaining Amount : {(data.rating.count)-Amount}</p>
                            </div>
                            <div className='button'>
                                <button onClick={()=>addToCartHandler(data)}>
                                    <span>Add To Card</span>
                                    <img src={card} alt=''/>
                                </button>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
                ))}
    </React.Fragment>
) 
}

export default ProductDetails
