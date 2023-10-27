import React, { useState } from 'react'
import { Link,useSearchParams,Form } from 'react-router-dom'
import './Login.css'
import Welcome from '../../images/we are open-cuate.png'
import Google from '../../images/icons8-google-60.png'
import Facbook from '../../images/icons8-facebook-50 (1).png'
const Login = () => {
    const [searchParams] = useSearchParams()
    const isLogin=searchParams.get('mode') === 'Login'
    return (
        <div className='Log-in'>
            <div className='image'>
            <img src={Welcome} alt='welcome'/>
            </div>
            {isLogin ? (
                <div className='new-user'>
                    <p>Create Your Account</p>
                    <span>Crate Acount To View And Manage Your Products</span>
                    <form>
                    <input type='text' placeholder='Email'/>
                    <input type='text' placeholder='User Name'/>
                    <input type='text' placeholder='Password'/>
                        <input type='text' placeholder='Confirm Password' />
                        <button > Create Your Account</button>
                    </form>
                </div>
            ): (
            <div className='form'>
            <div className='options'>
                <p>Sign In</p>
                <span className='or'>or</span>
                <Link to={`?mode=${isLogin ? 'SignUp' : 'Login'}`}>
                    <span>create an account</span>
                </Link>
                <div className='box google'>
                    <img src={Google} alt='' />
                    <p>Sign In With Google</p>
                </div>
                <div className='box facebook'>
                <img src={Facbook} alt='' />
                    <p>Sign In With Facbook</p>
                </div>
            </div>
            <hr />
            <span className='br'>Or</span>
            <Form >
                <input type='text' placeholder='Email' />
                <input type='text' placeholder='Password' />
                <button>Sign In</button>
                <input type='checkbox' id='check'/>
                <label htmlFor='check'>Remember Me</label>
                <p> Forget Your Password ?</p>
            </Form>
        </div>)
}

        </div>
    )
}

export default Login
