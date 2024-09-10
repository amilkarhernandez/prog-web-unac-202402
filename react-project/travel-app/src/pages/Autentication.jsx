import React, { useEffect, useState } from 'react'
import '../styles/Login.css'
import mundo from '../assets/mundo.svg'
import logo from '../assets/logoavion.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Autentication = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginService = async (e) => {
        e.preventDefault();
        const URL = import.meta.env.VITE_URL_BASE;
        const data = {
            username: username,
            password: password
        }

        await axios.post(`${URL}/users/login`, data)
            .then((resp) => {
                console.log(resp)
                if (resp.status == 200) {
                    navigate("/dashboard")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="container_principal">
            <img className="avion" src={logo} alt="logo avion" />
            <div className="container_world">
                <img src={mundo} alt="img mundo" />
            </div>
            <div className='w-full h-20 mt-44 flex flex-col justify-center items-center md:mt-60'>
                <h5 className='font-bold text-2xl text-gray-950 md:text-4xl'>Login</h5>
                <input type='text' placeholder='Username' className='mt-7 border-2 rounded-lg md:w-[200px]' onChange={(e) => setUsername(e.target.value)} />
                <input type='password' placeholder='Password' className='mt-7 border-2 rounded-lg md:w-[200px]' onChange={(e) => setPassword(e.target.value)} />
                <button className='mt-5 bg-[#121534] w-20 text-white rounded-lg md:w-[200px]' onClick={loginService}>Login</button>
            </div>
        </div>
    )
}
