import React, { useEffect, useState } from 'react'
import { DashboardList } from '../components/DashboardList'
import axios from 'axios';

const userInitial = {
    nombre: "JULIANA",
    apellido: "PINZON"
}

export const Dashboard = () => {

    const [nombre, setNombre] = useState("JULIANA");
    const [user, setUser] = useState(userInitial);
    const [fecha, setFecha] = useState(new Date());

    useEffect(() => {
        setNombre("Erik")
    }, [])

    useEffect(() => {
        setUser({ nombre: "ERIK", apellido: "ERIKE" })
    }, [nombre])

    return (
        <>
            <DashboardList nombre={nombre} user={user} fecha={fecha} />
        </>
    )
}
