import React,{useState} from 'react'
import './landing.css'
import arraow from '../../images/icons8-arrow-60.png'
const ImageSilder = (props) => {
    const [cuurentIndex, SetCurrentIndex] = useState(0)
    const [Active,setActive]=useState('')
    const goToPrev = () => {
        const isFirstSlide = cuurentIndex === 0
        const newIndex=isFirstSlide?props.Slides.length -1:cuurentIndex-1
        SetCurrentIndex(newIndex)
    }
    setTimeout(() => {
        const isLastSlide = cuurentIndex === props.Slides.length -1
        const newIndex = isLastSlide ? 0 : cuurentIndex + 1
        SetCurrentIndex(newIndex)
        
    }, 5000)
    
    const goToNext = () => {
        const isLastSlide = cuurentIndex === props.Slides.length -1
        const newIndex = isLastSlide ? 0 : cuurentIndex + 1
        SetCurrentIndex(newIndex)
        props.Slides[cuurentIndex].className='active'
    }
    console.log(props.Slides[cuurentIndex].url)
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
