import React, { useState, useEffect } from 'react';

export default function Primeiro() {

    const msg = 'Podemos passar o texto por aqui'

    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch("/getWords").then(
            // res => res.json()
        // ).then(
            data => {
                console.log(data.body.getReader())
                setData(data)
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