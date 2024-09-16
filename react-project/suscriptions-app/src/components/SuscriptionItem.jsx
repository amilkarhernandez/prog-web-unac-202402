import React from 'react'
import retirar from '../assets/images/retirar.svg';
import income from '../assets/images/income.svg';

export const SuscriptionItem = ({ typeIngreso, valor, fecha }) => {

    const formatFecha = (fecha) => {
        let fecha2 = new Date(fecha);
        const opcionesFecha = {
            day: 'numeric',
            month: 'short',
        };

        const opcionesHora = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };

        // Formatear la fecha
        const fechaFormateada = fecha2.toLocaleDateString('es-ES', opcionesFecha);
        // Formatear la hora
        const horaFormateada = fecha2.toLocaleTimeString('es-ES', opcionesHora);

        return `${fechaFormateada} ${horaFormateada}`;
    }

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(amount);
    };

    return (
        typeIngreso == "Transferencia" ?
            <div className="w-[350px] bg-[#dbf7d7] rounded-xl h-28 mt-2">
                <div className='flex justify-between items-center ml-3 mr-3'>
                    <div className='flex items-center mt-6'>
                        <div className='bg-[#9cdb9a] w-[65px] rounded-2xl'>
                            <img src={income} alt="type" className='w-14' />
                        </div>
                        <h1 className='ml-5 font-semibold text-xl'>Ingreso</h1>
                    </div>
                    <div className='mt-6'>
                        <h1 className='font-semibold text-2xl'>{formatCurrency(valor)}</h1>
                        <h1 className='font-semibold text-lg text-[#6b946a]'>{formatFecha(fecha)}</h1>
                    </div>
                </div>
            </div>
            :
            <div className="w-[350px] bg-[#fce1ed] rounded-xl h-28 mt-2">
                <div className='flex justify-between items-center ml-3 mr-3'>
                    <div className='flex items-center mt-6'>
                        <div className='bg-[#ffbada] w-[65px] rounded-2xl'>
                            <img src={retirar} alt="type" className='w-14' />
                        </div>
                        <h1 className='ml-5 font-semibold text-xl'>Retiro</h1>
                    </div>
                    <div className='mt-6'>
                        <h1 className='font-semibold text-2xl'>{formatCurrency(valor)}</h1>
                        <h1 className='font-semibold text-lg text-[#f979b5]'>{formatFecha(fecha)}</h1>
                    </div>
                </div>
            </div>
    )
}
