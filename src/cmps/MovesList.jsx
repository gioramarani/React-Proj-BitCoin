import { useEffect, useState } from "react"


export function MovesList({ title, getList, movesList }) {

    useEffect(() => {

        getList()
    }, [])


    return (
        <section className="moves-list">
            <div>{title}</div>
            <p></p>
            <ul>
                {movesList.map((move, index) => (
                    <li key={index}>
                        {title === 'Your Last 3 Moves:' ? (<p>To: {move.to}</p>) : ''}
                        <p>Amount: {move.amount}</p>
                        <p>At: {move.at}</p>
                    </li>
                ))}
            </ul>

        </section>

    )
}