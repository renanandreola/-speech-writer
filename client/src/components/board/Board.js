import React, { useState, useEffect } from 'react';

export default function Primeiro() {

    const msg = 'Podemos passar o texto por aqui'

    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch("/getWords").then(
            // res => res.json()
        // ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [])

    return (
        <div>
            <h2>Texto</h2>
            <p>{msg}</p>

            {/* {(typeof data.test == "undefined") ? (
                <p>Loading...</p>
            ) : (
                data.test.map((member, pos) => (
                    <p key={pos}>{member}</p>
                ))
            )}   */}
        </div>
    )
}