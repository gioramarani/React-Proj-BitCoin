import React, { useEffect, useState } from 'react'


export function TransferFund({ contact, maxCoins, onTransferCoins }) {

    const [amount, setAmount] = useState('')

    const handleAmountChange = (event) => {
        console.log('change');
        setAmount(event.target.value)
    }

    const handleTransfer = () => {
        console.log(amount);
        onTransferCoins(amount)
    }


    return (
        <section className='transfer-fund'>
            <p className='title'>Transfer coins to {contact.name}</p>
            <form className="amount-form" onSubmit={handleTransfer}>
                <label htmlFor="amount">Amount</label>
                <input onChange={handleAmountChange} type="number" value={amount} name="amount" id="amount" />
                <button >Transfer</button>
            </form>
        </section>
    )
}