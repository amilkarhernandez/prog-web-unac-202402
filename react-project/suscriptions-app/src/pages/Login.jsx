import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import lock from '../assets/images/lock.svg'
import enter from '../assets/images/enter.svg'
import back from '../assets/images/back.svg'
import axios, { HttpStatusCode } from 'axios';
import Constantes from '../utils/Constantes';
import Swal from 'sweetalert2';

export const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleReturnScreen = () => navigate("/");
    const handleLogin = async () => {

        const data = {
            username: username,
            password: password
        }

        await axios.post(Constantes.URL_BASE + '/users/login', data)
            .then((resp) => {
                console.log(resp)
                if (resp.status == HttpStatusCode.Ok) {
                    localStorage.setItem("id", resp.data.user.id);
                    localStorage.setItem("email", resp.data.user.email);
                    Swal.fire("Información", "Bienvenido!", "success")
                    navigate("/suscriptions")
                }
            })
            .catch((err) => {
                console.log(err)
                Swal.fire("Información", err.response.data.message, "error")
            })
    };

    return (
        <div className='w-screen h-screen bg-[#161326] flex flex-col justify-evenly items-center'>
            <div className='flex flex-col justify-center items-center h-56'>
                <img className='w-32' src={lock} alt="Check" />
                <h1 className='text-3xl text-white font-semibold mt-5'>LOGIN</h1>
                <p className='text-gray-400'>Inicia Sessión</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <input type="text" placeholder='username' className='w-[350px] h-14 rounded-lg pl-3 placeholder:text-gray-500'
                    value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder='Password' className='w-[350px] h-14 rounded-lg pl-3 mt-2 placeholder:text-gray-500'
                    value={password} onChange={(e) => setPassword(e.target.value)} data-testid="datapassword" />

                <button className='text-white bg-[#28253b] flex justify-center items-center w-[350px] h-14 rounded-xl mt-20'
                    onClick={handleLogin}>
                    <i className='w-10'>
                        <img src={enter} alt="" />
                    </i>
                    Login
                </button>
                <button className='text-[#28253b] bg-white font-bold flex justify-center items-center w-[350px] h-14 rounded-xl mt-2'
                    onClick={handleReturnScreen}>
                    <i className='w-7 mr-3'>
                        <img src={back} alt="" />
                    </i>
                    Atras
                </button>
            </div>
        </div>
    )
}
