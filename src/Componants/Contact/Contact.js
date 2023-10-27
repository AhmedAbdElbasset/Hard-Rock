import React from 'react'
import './Contact.css'
import facebook from '../../images/icons8-facebook-60 (1).png'
import instgram from '../../images/icons8-instagram-50.png'
import linkedIn from '../../images/icons8-linked-in-50.png'
import twitter from '../../images/icons8-twitter-50.png'
import conact from '../../images/Contact us-amico.png'
const Contact = () => {
    return (
        <div className='Contact'>
            <div className='right'>
                <img src={conact} alt=''/>
            </div>
            <div className='form'>
                <form>
                <label>Your Email</label>
                <input type='email' placeholder=''/>
                <label>User Name</label>
                <input type='text' placeholder='' maxLength={10}/>
                <label>Your Massage</label>
                <textarea />
                <button>Send</button>
                </form>
            </div>
            <div className='social'>
            <img src={facebook} alt='facebook'/>
            <img src={instgram} alt='instgram'/>
            <img src={linkedIn} alt='linkedIn'/>
            <img src={twitter} alt='twitter'/>
            </div>
        </div>
    )
}

export default Contact
