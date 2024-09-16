import React from 'react'
import check from '../assets/images/check.svg';
import backPrimary from '../assets/images/back-primary.svg';
import { useNavigate } from 'react-router-dom';

export const ButtonOperation = ({ operation, handleAddFondos, handleRetireFondos }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/suscriptions")
    }
    return (
        <div className='flex flex-col'>
            <button className='mt-2 bg-[#161326] w-[350px] h-14 rounded-full text-white'>
                <div className='flex items-center'>
                    <img src={check} alt="check" className='w-14' />
                    {operation == "Transferencia" ? <button className='ml-20' onClick={handleAddFondos}>Realizar Transferencia</button>
                        : <button className='ml-20' onClick={handleRetireFondos}>Realizar Retiro</button>}
                </div>
            </button>
            <button className='mt-2 bg-white w-[350px] h-14 rounded-full text-[#161326] border-solid border-2 border-[#161326]'
                onClick={handleNavigate}>
                <div className='flex items-center'>
                    <img src={backPrimary} alt="backPrimary" className='w-14' />
                    <h1 className='ml-24'>Atras</h1>
                </div>
            </button>
        </div>
    )
}
