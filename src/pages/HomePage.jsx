import React, { useEffect, useState } from 'react'
import { userService } from '../services/userService'
import { BitcoinService } from '../services/BitcoinService'
import { MovesList } from '../cmps/MovesList'
import { SignupPage } from './SignupPage'


export function HomePage() {

    const [user, setUser] = useState(null)
    const [bitcoinRate, setBitcoinRate] = useState(null)
    const [movesList, setMovesList] = useState([])


    useEffect(() => {
        getUser()
    }, [])

    useEffect(() => {
        if (user) getBitcoinRate()
    }, [user])

    async function getUser() {
        const user = await userService.getLoggedInUser()
        setUser(user)
    }

    async function getBitcoinRate() {
        const currBitcoinRate = await BitcoinService.getRate(user.coins)
        setBitcoinRate(currBitcoinRate)
    }

    function getMoveList() {
        const currUser = user
        console.log(currUser);
        const threeLastMoves = currUser.moves.slice(-3)
        setMovesList(threeLastMoves)
    }

    if (!user) return <SignupPage/>
    return (
        <section className='home-page'>
            <section className='welcome-details'>
            <div>
                <img src='https://res.cloudinary.com/dtaiyvzq5/image/upload/v1692114168/n08tvl9liglyf7f3u3hu.png' alt="" />
                <h3>Hello {user.name}!</h3>
            </div>
            <div>
                <img src='https://res.cloudinary.com/dtaiyvzq5/image/upload/v1692114209/w6onpyopdvjsyqwvqa32.png' alt="" />
                <h3>Coins: {user.coins}</h3>
            </div>
            <div>
                <img src='https://res.cloudinary.com/dtaiyvzq5/image/upload/v1692114221/dfyxot4ofoop9ekwvnzz.png' alt="" />
                <h3>BTC: {bitcoinRate}</h3>
            </div>
            </section>

            <MovesList title={movesList.length ? "Your Last 3 Moves:" : ''} getList={getMoveList} movesList={movesList} />
        </section>
    )
}

