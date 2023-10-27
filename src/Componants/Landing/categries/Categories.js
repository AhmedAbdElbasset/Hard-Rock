import './categories.css'
const Categories = (props) => {
    const GetCategory = (Category) => {
        props.getCategory(Category)
    }
return (
    <div id='box' className='box'>
        <div className='head-line'><p>Products</p></div>
        <span onClick={()=>(GetCategory('electronics'))} id='electronics'>electronics</span>
        <span onClick={()=>(GetCategory('jewelery'))}>jewelery</span>
        <span onClick={()=>(GetCategory(`men's clothing`))}>men's clothing</span>
        <span onClick={()=>(GetCategory(`women's clothing`))}>women's clothing</span>
    </div>
)
}

export default Categories
