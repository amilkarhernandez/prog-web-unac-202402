import React from 'react'
import wallet from '../assets/images/wallet.svg';
import plus from '../assets/images/plus.svg';
import retire from '../assets/images/retire.svg';
import { useNavigate } from 'react-router-dom';

export const Card = ({ valorTotal }) => {

    const navigate = useNavigate();

    const handleAddFondos = () => {
        navigate("/operations", { state: { operation: "Transferencia", valorTotal: valorTotal } })
    }

    const handleRetiro = () => {
        navigate("/operations", { state: { operation: "Retiro", valorTotal: valorTotal } })
    }

    return (
        <div className='w-full h-64 flex justify-center items-center mt-6'>
            <div className='w-[350px] h-64 bg-[#161326] rounded-3xl flex flex-col justify-center'>
                <div className='w-[340px] h-44 bg-[#b8f3ff] rounded-3xl mt-1 ml-[5px]'>
                    <div className='flex mt-5 ml-5'>
                        <img src={wallet} alt="wallet" className='w-7' />
                        <p className='ml-3 mt-0 font-semibold'>Suscriptions Wallet</p>
                    </div>
                    <h1 className='ml-5 mt-5 font-bold text-[40px]'>{valorTotal}</h1>
                    <p className='ml-5 font-light text-gray-600'>Dinero Disponible</p>
                </div>
                <div className='h-[70px] mt-[5px] flex justify-evenly items-center'>
                    <button className='flex text-white' onClick={handleAddFondos}>
                        <i>
                            <img src={plus} alt="plus" className='w-10 mr-3' />
                        </i>
                        <p className='mt-2'>Add Fondos</p>
                    </button>
                    <p className='mt-2 text-gray-300'>|</p>
                    <button className='flex text-white' onClick={handleRetiro}>
                        <i>
                            <img src={retire} alt="plus" className='w-10 mr-3' />
                        </i>
                        <p className='mt-2'>Retirar</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
