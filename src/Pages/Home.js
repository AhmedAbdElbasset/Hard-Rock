import React,{useState,useEffect} from 'react'
import Header from '../Componants/Header/Header'
import Landing from '../Componants/Landing/Landing'
import Categories from '../Componants/Landing/categries/Categories'
import Products from '../Componants/Products/Products'
import { ToastContainer } from "react-toastify"
import './Home.css'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '../Componants/Footer/Footer'
const Home = () => {
    const [products, setProducts] = useState([])
    const [CAtegory, setCategory] = useState()
    const productsData = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const Data = await response.json()
        return setProducts(Data)
    }
    
    const getCategoryHandler = (Category) => {
        setCategory(Category)
        const result = products.filter((curr) => {
            return curr.category === CAtegory;
        });
        return setProducts(result)
    }
    console.log(products)
    useEffect(() => {
        productsData()
    }, [CAtegory])
    return (
        <div className='Home'>
            <ToastContainer/>
            <Header />
            <Landing />
            <Categories getCategory={getCategoryHandler}/>
            <Products cartData={products} />
            <Footer/>
        </div>
)
}

export default Home
