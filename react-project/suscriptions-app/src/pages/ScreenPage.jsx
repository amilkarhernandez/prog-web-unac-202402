import React from 'react'
import check from '../assets/images/check.svg'
import register from '../assets/images/register.svg'
import login from '../assets/images/login.svg'
import { useNavigate } from 'react-router-dom'

export const ScreenPage = () => {
    const navigate = useNavigate();

    const handleRegister = () => navigate("/register");
    const handleLogin = () => navigate("/login");
    return (
        <div className='w-screen h-screen bg-[#161326] flex flex-col justify-evenly items-center'>
            <div className='flex flex-col justify-center items-center h-56'>
                <img className='w-40' src={check} alt="Check" />
                <h1 className='text-3xl text-white font-semibold'>Suscriptions App</h1>
                <p className='text-gray-400'>Bienvenidos, Inicia Sesión</p>
            </div>
            <div className='flex flex-col justify-center items-center h-56'>
                <button className='text-white bg-[#28253b] flex justify-center items-center w-[350px] h-14 rounded-xl'
                    onClick={handleRegister}>
                    <i className='w-10'>
                        <img src={register} alt="" />
                    </i>
                    Registrar
                </button>
                <button className='text-white bg-[#28253b] flex justify-center items-center w-[350px] h-14 rounded-xl mt-3'
                    onClick={handleLogin}>
                    <i className='w-10 mr-2'>
                        <img src={login} alt="" />
                    </i>
                    Iniciar Sessión</button>
            </div>
        </div>
    )
}
