import React, { useState } from 'react';
import usercard from '../assets/images/usercard.svg'
import register from '../assets/images/register.svg'
import back from '../assets/images/back.svg'
import { useNavigate } from 'react-router-dom';
import axios, { HttpStatusCode } from 'axios';
import Constantes from '../utils/Constantes';
import Swal from 'sweetalert2';

export const RegisterPage = () => {
    const navigate = useNavigate();

    const [names, setNames] = useState("");
    const [lastnames, setLastnames] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleReturnScreen = () => navigate("/");

    const handleRegister = async () => {
        const data = {
            names: names,
            lastnames: lastnames,
            email: email,
            username: username,
            password: password
        }

        await axios.post(Constantes.URL_BASE + "/users/create", data)
            .then((resp) => {
                if (resp.status == HttpStatusCode.Created) {
                    Swal.fire("Información", "Se ha guardado el usuario con exito", "success")
                    navigate("/login")
                }
            })
            .catch((err) => {
                console.log(err)
                Swal.fire("Información", "Ocurrio un error guardando el usuario", "error")
            })
    }
    return (
        <div className='w-screen h-screen bg-[#161326] flex flex-col justify-evenly items-center'>
            <div className='flex flex-col justify-center items-center h-56'>
                <img className='w-40' src={usercard} alt="Check" />
                <h1 className='text-3xl text-white font-semibold'>Registrate Gratis!</h1>
                <p className='text-gray-400'>Llena los datos a continuación</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <input type="text" placeholder='Nombres' className='w-[350px] h-10 rounded-lg pl-3 placeholder:text-gray-500'
                    value={names} onChange={(e) => setNames(e.target.value)} />
                <input type="text" placeholder='Apellidos' className='w-[350px] h-10 rounded-lg pl-3 mt-2 placeholder:text-gray-500'
                    value={lastnames} onChange={(e) => setLastnames(e.target.value)} />
                <input type="email" placeholder='Email' className='w-[350px] h-10 rounded-lg pl-3 mt-2 placeholder:text-gray-500'
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder='username' className='w-[350px] h-10 rounded-lg pl-3 mt-2 placeholder:text-gray-500'
                    value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="text" placeholder='Password' className='w-[350px] h-10 rounded-lg pl-3 mt-2 placeholder:text-gray-500'
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className='text-white bg-[#28253b] flex justify-center items-center w-[350px] h-14 rounded-xl mt-4'
                    onClick={handleRegister}>
                    <i className='w-10'>
                        <img src={register} alt="" />
                    </i>
                    Registrar
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
