import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
function Signup() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        username: ""
    });

    const { email, password, username } = inputValue;
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left"
        });

    const handleSuccess = (msg) =>
        toast.success(msg, {
            postition: "bottom-right",
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:4000/signup",
                {
                    ...inputValue,
                },
                { withCredentials: true }
            );
            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate("/");
                }, 1000);
            } else {
                handleError(message);
            }
        } catch (error) {
            console.log(error);
        }
        setInputValue({
            ...inputValue,
            email: "",
            password: "",
            username: ""
        });
    };

    return (
        <div>
            <h1 className='mt-3 text-2xl text-center font-semibold text-gray-800 '>REGISTER NEW ACCOUNT</h1>
            <p className='mt-2 text-[15px] text-center text-footercolor'>ALREADY HAVE AN ACCUNT? <Link className='text-Red ml-1' to='/login'>CLICK HERE TO LOGIN</Link> </p>
            <form onSubmit={handleSubmit}>
                <div className='text-center mt-5'>
                    <label className='mr-[4rem] text-footercolor text-sm' htmlFor="Fast Name">Fast Name</label>
                    <input className='pl-3 font-light w-[32rem] h-8 rounded-md placeholder-footercolor border border-gray-300' type="text" name='Fast Name' value={email} placeholder='Fast Name ' onChange={handleOnChange} />
                </div>
                <div className='text-center mt-5'>
                    <label className='mr-[4rem] text-footercolor text-sm' htmlFor="Last Name">Last Name</label>
                    <input className='pl-3 font-light w-[32rem] h-8 rounded-md placeholder-footercolor border border-gray-300' type="text" name='Last Name' value={username} placeholder='Last Name' onChange={handleOnChange} />
                </div>
                <div className='text-center mt-5'>
                    <label className='mr-[5.7rem] text-footercolor text-sm' htmlFor="Email">E-mail</label>
                    <input className='pl-3 font-light w-[32rem] h-8 rounded-md placeholder-footercolor border border-gray-300' type="email" name='Email' value={email} placeholder='E-mail' onChange={handleOnChange} />
                </div>
                <div className='text-center mt-5'>
                    <label className='mr-[4rem] text-footercolor text-sm' htmlFor="Telephone">Telephone</label>
                    <input className='pl-3 font-light w-[32rem] h-8 rounded-md placeholder-footercolor border border-gray-300' type="number" name='Telephone' value={email} placeholder='Telephone' onChange={handleOnChange} />
                </div>
                <div className='text-center mt-5'>
                    <label className='mr-[4rem] text-footercolor text-sm' htmlFor="password">Password</label>
                    <input className='pl-3 font-light w-[32rem] h-8 rounded-md placeholder-footercolor border border-gray-300' type="password" name='password' value={email} placeholder='Password' onChange={handleOnChange} />
                </div>
                <div className='text-center mt-5'>
                    <label className='mr-3 text-footercolor text-sm' htmlFor="confirm password">Confirm Password</label>
                    <input className=' pl-3 font-light w-[32rem] h-8 rounded-md placeholder-footercolor border border-gray-300' type="password" name='confirm password' value={email} placeholder='Confirm Password' onChange={handleOnChange} />
                </div>
                <div className='text-center mt-5'>
                    <label className='ml-[-29rem] text-footercolor text-sm' htmlFor="newsletter">Subscribe to Newsletter</label>
                    <input className='ml-4 accent-Red' type="radio" name='newsletter' value={email} placeholder='' onChange={handleOnChange} />
                    <label className=' mr-4 text-footercolor text-sm' htmlFor="">Yes</label>
                    <input className='accent-Red' type="radio" name='newsletter' value={email} placeholder='' />
                    <label className=' text-footercolor text-sm' htmlFor="">No</label>
                </div>
                <p className='text-xs mt-2 text-center text-footercolor '>By creating an account,your agreeing to our<span className='ml-1 text-xs text-Red'>Privacy Policy.</span></p>
                <button className='ml-[39rem] mt-6 rounded-sm font-bold text-white bg-red-600 w-[7rem] h-[2.5rem] ' type='submit'>Continue</button>
            </form>
            <ToastContainer />

        </div>
    )
}

export default Signup