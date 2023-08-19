import React, { useEffect, useState } from 'react'
import { contactService } from '../services/contactService'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { TransferFund } from '../cmps/TransferFund'
import { MovesList } from '../cmps/MovesList'
import { userService } from '../services/userService'

export function ContactDetails() {

    const [contact, setContact] = useState(null)
    const [movesList, setMovesList] = useState([])

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadContact()
    }, [params.id])


    async function loadContact() {
        try {

            const contact = await contactService.getContactById(params.id)
            setContact(contact)
        } catch (error) {
            console.log(error);
        }
    }

    function onBack() {
        navigate('/contact')
        // navigate(-1)
    }

    function onTransferCoins(value) {
        console.log(value);
        // setAmount(value)
        userService.addMove(contact, value)

    }

    function getMoveListToCurrContact() {
        const loggedInUser = userService.getLoggedInUser()
        console.log(loggedInUser);
        console.log(loggedInUser.moves);
        const moveList = loggedInUser.moves.filter(m => m.toId === contact._id)
        console.log(moveList);
        setMovesList(moveList)
        //    return moveList
    }


    if (!contact) return <div>Loading...</div>
    return (
        <section className='contact-details'>
            <section>
                <h3>Name: {contact.name}</h3>
            </section>
            <section>
                <h3>Phone Number: {contact.phone}</h3>
            </section>
            <section>
                <h3>Email: {contact.email}</h3>
            </section>
            <section className='display'>
                <TransferFund onTransferCoins={onTransferCoins} contact={contact} />
                <section >
                    <img src={`https://robohash.org/${contact.name}`} />
                    <section className='actions'>
                    <button className='btn' onClick={onBack}>Back</button>
                    <Link className='btn' to={`/contact/edit/${contact._id}`}>Edit</Link>
                    </section>
                </section>
                <MovesList title={movesList.length ? `Your Moves to ${contact.name}:` : ''} getList={getMoveListToCurrContact} movesList={movesList} />
            </section>
        </section>
    )
}
