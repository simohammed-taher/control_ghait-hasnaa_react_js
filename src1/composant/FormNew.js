import React, { useState } from 'react'

export default function FormNew(props) {
    const [num, setNumero] = useState();
    const [intl, setIntitule] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        let or = { Numero: num, Intitulé: intl };
        props.onAddComputer(or);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Numéro:</label>
            <input onChange={(e) => setNumero(e.target.value)} /> <br></br>
            <label>Intitulé:</label>
            <input onChange={(e) => setIntitule(e.target.value)} /><br></br>
            <input type='submit' value="Nouvel ordinateur" />
        </form>
    )
}

