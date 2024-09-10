import React, { useEffect, useState } from 'react'

export const DashboardList = ({ nombre, user, fecha }) => {

    const [jornada, setJornada] = useState("");

    useEffect(() => {
        if (fecha.getHours() >= 18 <= 24) {
            console.log(fecha.getHours())
            setJornada("NOCHE")
        }
    }, [fecha])

    return (
        <>
            <p>DashboardList Aqui {nombre}, {user.nombre}</p>
            <h1>{fecha.toString()}</h1>
            <h1>JORNADA: {jornada}</h1>
        </>
    )
}
