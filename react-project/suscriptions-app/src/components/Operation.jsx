import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import retirar from '../assets/images/retirar.svg';
import income from '../assets/images/income.svg';
import { CardData } from './CardData';
import { ButtonOperation } from './ButtonOperation';
import { v1 as uuid } from 'uuid'
import axios from 'axios';
import Constantes from '../utils/Constantes';
import Swal from 'sweetalert2';

export const Operation = () => {
    const { state } = useLocation();
    console.log(state.operation);
    const navigate = useNavigate();

    const [emailOrigen, setEmailOrigen] = useState("");
    const [identificador, setIdentificador] = useState("");
    const [emailDestino, setEmailDestino] = useState("");
    const [valorTransaccion, setValorTransaccion] = useState(0);


    useEffect(() => {
        setEmailOrigen(localStorage.getItem("email"));
        setIdentificador(uuid);
    }, [])

    const formatCurrency = (amount) => {
        if (!amount) return '';
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(amount);
    };

    const handleChange = (e) => {
        const inputValue = e.target.value.replace(/\D/g, ''); // Eliminar caracteres no numéricos
        setValorTransaccion(inputValue);
    };

    const handleAddFondos = async () => {
        console.log("llego")
        const idUser = localStorage.getItem("id");
        const idSuscript = localStorage.getItem("idsuscription");
        const data = {
            userId: idUser,
            suscriptionId: idSuscript,
            valor: valorTransaccion,
            operacion: state.operation,
            emailOrigen: emailOrigen,
            emailDestino: emailDestino,
            identificador: identificador
        }

        await axios.post(Constantes.URL_BASE + "/suscriptions/movimiento", data)
            .then((resp) => {
                console.log(resp)
                Swal.fire("Informacion", "Se hizo correctamente la transferencia", "success")
                navigate("/suscriptions")
            })
            .catch((err) => {
                console.log(err)
                Swal.fire("Informacion", "Ocurrio un Error, intente mas tarde", "error")
            })
    }

    const handleRetireFondos = async () => {
        console.log("llego")
        const idUser = localStorage.getItem("id");
        const idSuscript = localStorage.getItem("idsuscription");
        const data = {
            userId: idUser,
            suscriptionId: idSuscript,
            valor: valorTransaccion,
            operacion: state.operation,
            emailOrigen: emailOrigen,
            emailDestino: emailDestino,
            identificador: identificador
        }

        await axios.post(Constantes.URL_BASE + "/suscriptions/movimiento", data)
            .then((resp) => {
                console.log(resp)
                Swal.fire("Informacion", "Se hizo correctamente el retiro", "success")
                navigate("/suscriptions")
            })
            .catch((err) => {
                console.log(err)
                Swal.fire("Informacion", "Ocurrio un Error, intente mas tarde", "error")
            })
    }

    return (
        <div className='w-screen h-screen items-center flex flex-col overflow-hidden'>
            {state.operation == "Transferencia" ?
                <div className='flex justify-center ml-4 mr-4 mt-2'>
                    <h1 className='font-semibold text-xl'>Confirmación de Transferencia</h1>
                </div> :
                <div className='flex justify-center ml-4 mr-4 mt-2'>
                    <h1 className='font-semibold text-xl'>Confirmacion de Retiro</h1>
                </div>}
            <div className='w-full flex justify-center items-center mt-5'>
                {state.operation == "Transfer" ? <img src={income} className='w-28' alt="" /> : <img src={retirar} className='w-28' alt="" />}
            </div>
            <div className='mt-10 w-[350px] flex flex-col justify-between items-center'>
                <input type='text' placeholder='$ Cantidad' className='bg-slate-200 w-[250px] h-10 rounded-md pl-4 outline-0'
                    value={formatCurrency(valorTransaccion)} onChange={(e) => handleChange(e)} />
                <p className='mt-2 font-semibold text-sm'>Saldo: {state.valorTotal}</p>
            </div>
            <CardData operacion={state.operation} emailOrigen={emailOrigen} emailDestino={emailDestino} setEmailDestino={setEmailDestino}
                identificador={identificador} valorTransaccion={valorTransaccion} formatCurrency={formatCurrency} />
            <ButtonOperation operation={state.operation} handleAddFondos={handleAddFondos} handleRetireFondos={handleRetireFondos} />
        </div>
    )
}
