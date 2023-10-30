import React, { useState, useEffect } from 'react'
import { CSSProperties } from 'react';
import ProductDetails from '../Componants/ProductDetails/ProductDetails'
import Footer from '../Componants/Footer/Footer'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import '../Componants/ProductDetails/productDetails.css'
const ProductDetailsPage = (props) => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },1500)
    },[])
    const CSSProperties = {
        borderColor: "red",
        top: '50%',
        left: '50%',
        transform:'translate(-50%,-50%)'
        };
        
    return (
    <React.Fragment>
        {loading?(<ClimbingBoxLoader color={`black`} loading={loading} size={30} cssOverride={CSSProperties} /> ):(
            <div className='productPage'>
                <ProductDetails productID={props.productID}/>
                <Footer/>
                </div>)}
            </React.Fragment>
    )
}

export default ProductDetailsPage
