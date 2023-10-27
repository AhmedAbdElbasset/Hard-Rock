import React, { useState, useContext } from 'react'
import { useSelector } from 'react-redux'
import './Header.css'
import search from '../../images/search.png'
import Cart from '../../images/icons8-shopping-basket-60.png'
import CartDetails from './Cart'
import { Link } from 'react-router-dom'
const Header = (props) => {
    const [cartActive,setCartActive]=useState(false)
    const [isActive, setIsActive] = useState(false)
    const {cartTotalQuantaity}=useSelector((state)=>state.cart)
    const ActiveHandler = () => {
        setIsActive(prev=>!prev)
    }
    const CartActiveHandler = () => {
        setCartActive(prevState=>!prevState)
    }
    return (
        <React.Fragment>
            <div className={`Header ${props.className}`}>
                <div className='Logo'>
                    <Link to='/'><h1>Hard Rock</h1></Link>
                </div>
                <div className='Basket'>
                    <span>{cartTotalQuantaity}</span>
                    <img src={Cart} alt='' onClick={CartActiveHandler}/>
                </div>
                <div className='Search'>
                    <button >
                        <img src={search} alt='' />
                    </button>
                    <label htmlFor='search'></label>
                <input type='text' id='search' onFocus={ActiveHandler} placeholder='What Do You Want '/>
                </div>
                <div onClick={ActiveHandler} className={`logOut ${isActive?'active':''}`}>
                    <Link to={'/Contact'}><span>Contact</span></Link>
                    <Link to={'/trackOrder'}><span> Track Order</span></Link>
                    <Link to={'/login'}><span> Log in</span></Link>
                </div>
                <div onClick={ActiveHandler} className={`menu-bar ${isActive?'active':''}`}></div>
            </div>
            <CartDetails className={cartActive} onActive={CartActiveHandler}/>
        </React.Fragment>
    )
}

export default Header
