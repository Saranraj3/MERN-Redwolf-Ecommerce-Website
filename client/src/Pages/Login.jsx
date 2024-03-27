import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

function Login() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: ""
    });

    const { email, password } = inputValue;
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
            position: "bottom-left"
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:4000/login",
                {
                    ...inputValue,
                },
                { withCredentials: true }
            );
            console.log(data);
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
        });
    };

    return (
        <div>
            <h1 className='mt-3 text-2xl text-center font-semibold text-gray-800 '>LOGIN TO YOUR ACCOUNT</h1>
            <p className='mt-2 text-[15px] text-center text-footercolor'>DON'T HAVE AN ACCOUNT?<Link className='text-Red ml-1' to='/signup'>CLICK HERE TO REGISTER</Link></p>
            <p className='mt-2 text-[15px] text-center text-footercolor'>SIGN IN WITH YOUR EMAIL</p>
            <form onSubmit={handleSubmit}>
                <div className='text-center mt-5'>
                    <label className='mr-[4rem] text-footercolor text-sm' htmlFor="email">Email</label>
                    <input className='pl-3 font-light w-[32rem] h-8 rounded-md placeholder-footercolor border border-gray-300' type="email" name='email' value={email} placeholder='Email' onChange={handleOnChange} />
                </div>
                <div className='text-center mt-3'>
                    <label className='mr-[4rem] text-footercolor text-sm' htmlFor="password">Password</label>
                    <input className='pl-3 ml-[-1.2rem] mt-5 font-light w-[32rem] h-8 rounded-md placeholder-footercolor border border-gray-300' type="password" name='password' value={password} placeholder='Password' onChange={handleOnChange} />
                </div>
                <button className='ml-[39rem] mt-6 rounded-sm font-bold text-white bg-red-600 w-[7rem] h-[2.5rem] ' type='submit'>Login</button>
                <p className='mt-3 text-sm text-Red text-center'>FORGOT YOUR PASSWORD?</p>
                <div class="mt-[-1rem] inline-flex items-center justify-center w-full">
                    <hr class=" w-[45rem] h-px my-8 bg-gray-200 border-0 dark:bg-gray-400" />
                    <p className='text-sm  absolute px-3 font-light text-gray-900 -translate-x-1/2 bg-white left-1/2 '>OR</p>
                </div>
                <p className='text-center text-footercolor'>SIGN IN WITH A SOCIAL ACCOUANT</p>
                <p className='text-xs mt-2 text-center text-footercolor '>By creating an account,your agreeing to our<span className='ml-1 text-xs text-Red'>Privacy Policy.</span></p>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Login