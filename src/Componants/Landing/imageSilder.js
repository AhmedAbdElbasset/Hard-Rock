import React,{useState} from 'react'
import './landing.css'
import backGround1 from '../../images/backGround.jpg'
import backGround2 from '../../images/backGround2.jpg'
import backGround3 from '../../images/backGround3.jpg'
import arraow from '../../images/icons8-arrow-60.png'
const ImageSilder = (props) => {
    const [cuurentIndex, SetCurrentIndex] = useState(0)
    const [Active,setActive]=useState('')
    const goToPrev = () => {
        const isFirstSlide = cuurentIndex === 0
        const newIndex=isFirstSlide?props.Slides.length -1:cuurentIndex-1
        SetCurrentIndex(newIndex)

        // props.Slides[cuurentIndex].className==='active'?props.Slides
        
    }
    setTimeout(() => {
        // props.Slides[cuurentIndex].className='active'
        const isLastSlide = cuurentIndex === props.Slides.length -1
        const newIndex = isLastSlide ? 0 : cuurentIndex + 1
        SetCurrentIndex(newIndex)
        
        // props.Slides[newIndex].className==='active'?props.Slides[newIndex].className='':props.Slides[newIndex].className='active'
    }, 5000)
    
    const goToNext = () => {
        const isLastSlide = cuurentIndex === props.Slides.length -1
        const newIndex = isLastSlide ? 0 : cuurentIndex + 1
        SetCurrentIndex(newIndex)
        props.Slides[cuurentIndex].className='active'
    }
    return (
        <div className='slide'>
            <button className='left button' onClick={goToPrev}><img src={arraow} alt=''/></button>
            <button className='right button' onClick={goToNext}><img src={arraow} alt=''/></button>
            <img src={props.Slides[cuurentIndex].url}
            alt={props.Slides[cuurentIndex].alt}/>
        </div>
        
    )
}

export default ImageSilder;
