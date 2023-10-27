import React from 'react'
import './landing.css'
import { Link } from 'react-router-dom'
import ImageSilder from '../Landing/imageSilder'
const Landing = () => {
    const slides = [
        {
            url: '/static/media/backGround.12bd91ee181bade7f7eb.jpg',
            alt: 'slide1',
            className:''
        },
        {
            url: '/static/media/backGround2.faf4cb4f4cb2ee543fab.jpg',
            alt:'slide2',
            className:''
        },
        {
            url: '/static/media/backGround3.2949d5b2f9a75a97acf4.jpg',
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