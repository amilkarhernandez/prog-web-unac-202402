import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { Card } from '../components/Card'
import { SuscriptionsList } from '../components/SuscriptionsList'
import axios, { HttpStatusCode } from 'axios'
import Constantes from '../utils/Constantes'

export const Suscriptions = () => {

    const [valorTotal, setValorTotal] = useState(0);
    const [movimientos, setMovimientos] = useState([]);

    const handleGetdataSuscriptions = async () => {
        const id = localStorage.getItem("id");
        await axios.get(Constantes.URL_BASE + "/suscriptions/find/" + id)
            .then((resp) => {
                if (resp.status == HttpStatusCode.Ok) {
                    setValorTotal(resp.data.result.valorTotal)
                    localStorage.setItem("idsuscription", resp.data.result._id)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleGetMovimientosSuscriptions = async () => {
        const id = localStorage.getItem("id");
        await axios.get(Constantes.URL_BASE + "/suscriptions/movimientos/" + id)
            .then((resp) => {
                if (resp.status == HttpStatusCode.Ok) {
                    setMovimientos(resp.data.result)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(amount);
    };

    useEffect(() => {
        handleGetdataSuscriptions();
        handleGetMovimientosSuscriptions();
    }, [])

    return (
        <div>
            <Header title={"Suscripciones"} />
            <Card valorTotal={formatCurrency(valorTotal)} />
            <SuscriptionsList movimientos={movimientos} />
        </div>
    )
}
