import React from 'react'
import './landing.css'
import backGround1 from '../../images/backGround.jpg'
import backGround2 from '../../images/backGround2.jpg'
import backGround3 from '../../images/backGround3.jpg'
import { Link } from 'react-router-dom'
import ImageSilder from '../Landing/imageSilder'
const Landing = () => {
    const slides = [
        {
            url: backGround1,
            alt: 'slide1',
            className:''
        },
        {
            url: backGround2,
            alt:'slide2',
            className:''
        },
        {
            url: backGround3,
            alt:'slide3',
            className:''
        }
    ]
    return (
        <div className='landing'>
            <div className='des'>
                <p >Let's Create </p>
                <p> Your Own Style</p>
                <span>25% Off On All Products</span>
                <div className='buttons'>
                <button > <a href='#box'>Shop Now</a></button>
                <button ><Link to={'/login'}>Log in</Link> </button>
                </div>
            </div>
            <ImageSilder Slides={slides}/>
        </div>
    )
}

export default Landing