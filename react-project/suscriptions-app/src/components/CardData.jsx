import React, { useEffect, useState } from 'react'

export const CardData = ({ operacion, emailOrigen, emailDestino, setEmailDestino, identificador, valorTransaccion, formatCurrency }) => {

    return (
        <>
            <div className='w-12 h-12 bg-white rounded-full absolute top-[60%] left-0'></div>
            <div className='w-12 h-12 bg-white rounded-full absolute top-[60%] right-0'></div>
            <div className='bg-[#e7e7e8] w-[350px] h-32 mt-7 rounded-2xl border-dashed border-2 border-b-black'>
                <div className='ml-7 mt-2'>
                    <div className='flex'>
                        <h1 className='font-bold'>Operación:</h1>
                        <h1 className='font-semibold ml-10'>{operacion}</h1>
                    </div>
                    <div className='flex'>
                        <h1 className='font-bold'>Email Origen:</h1>
                        <h1 className='font-semibold ml-5'>{emailOrigen}</h1>
                    </div>
                    {operacion != "Transferencia" ? <div className='flex items-center mt-1'>
                        <h1 className='font-bold'>Email Destino:</h1>
                        <input type="email" className='ml-3 h-7 p-2 rounded-lg' placeholder='Ingrese Email Destino'
                            value={emailDestino} onChange={(e) => setEmailDestino(e.target.value)} />
                    </div> : <div className='flex items-center mt-1'>
                        <h1 className='font-bold'>Email Destino:</h1>
                        <h1 className='font-semibold ml-5'>{emailOrigen}</h1>
                    </div>}
                </div>
            </div>
            <div className='bg-[#e7e7e8] w-[350px] h-28 rounded-2xl'>
                <div className='ml-7 mt-6'>
                    <div className='flex'>
                        <h1 className='font-bold'>Identificador:</h1>
                        <h1 className='font-semibold ml-5 text-sm'>{identificador}</h1>
                    </div>
                    <div className='flex'>
                        <h1 className='font-bold'>Valor:</h1>
                        <h1 className='font-semibold ml-20 text-red-600'>{formatCurrency(valorTransaccion)}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
