import React from 'react'
import { SuscriptionItem } from './SuscriptionItem'

export const SuscriptionsList = ({ movimientos }) => {
    return (
        <div className='mt-6 w-[350px] ml-5 h-[310px] overflow-scroll'>
            <h1 className='font-semibold text-xl'>Tus Suscripciones</h1>
            <div className='mt-5 h-[600px]'>
                <ul >
                    {movimientos.movimientos != null ? movimientos.movimientos.map(element => {
                        return <SuscriptionItem key={element._id} typeIngreso={element.operacion} valor={element.valor} fecha={element.fecha} />
                    }) : <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                        <p className="font-bold">Información</p>
                        <p>No Se encontraron Movimientos</p>
                    </div>}
                </ul>
            </div>
        </div>
    )
}
