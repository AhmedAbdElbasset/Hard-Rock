import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import facebook from '../../images/icons8-facebook-60 (1).png'
import linkedIn from '../../images/icons8-linked-in-50.png'
import Whats from '../../images/icons8-whatsapp-50.png'
const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Name'>
                <p>Hard Rock</p>
                <span>Terms of Services | Privacy Policy</span>
            </div>
            <div className='page'>
            <Link to={`/Hard-Rock`}><span>Home</span> </Link>
            <Link to={`/trackOrder`}><span>Track Order</span> </Link>
            <Link to={`/Contact`}><span>Contact</span> </Link>
            <Link to={`/login`}><span>Log In</span> </Link>
            </div>
            <div className='touch'>
                <p> Get in touch</p>
                <a href='https://www.facebook.com/profile.php?id=100008099791606&locale=ar_AR' target='_blank'><img src={facebook} alt=''/></a>
                <a href='https://www.linkedin.com/in/ahmed-abdelbaset-172608233/' target='_blank'><img src={linkedIn} alt=''/></a>
                <a href='https://wa.me/+201123599352' target='_blank'><img src={Whats} alt=''/></a>
                <span>I'd Love To Hear from You</span>
            </div>
        </div>
    )
}

export default Footer
