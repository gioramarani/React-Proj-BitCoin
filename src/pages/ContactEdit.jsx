import React, { useEffect, useState } from 'react'
import { contactService } from '../services/contactService'
import { Link, useNavigate, useParams } from 'react-router-dom'

export function ContactEdit() {

    const [contact, setContact] = useState(contactService.getEmptyContact())
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadContact()
    }, [])

    async function loadContact() {
        const contactId = params.id
        try {
            if (contactId) {
                const contact = await contactService.getContactById(contactId)
                setContact(contact)
            }
        } catch (error) {
            console.log('error:', error)
        }
    }

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = (+value || '')
                break;
            case 'checkbox':
                value = target.checked
            default:
                break;
        }

        setContact(prevContact => ({
            ...prevContact,
            [field]: value
        }))
    }

    async function onSaveContact(ev) {
        ev.preventDefault()
        try {
            await contactService.saveContact(contact)
            console.log(contact);
            navigate('/contact')
        } catch (error) {
        }
    }

    async function onDetele() {
        await contactService.deleteContact(contact._id)
        navigate('/contact')
    }


    const { name, phone, email } = contact
    return (
        <section className='contact-edit'>
            <h1>{contact._id ? 'Edit' : 'Add'} Contact</h1>
            <form  >
                <label htmlFor="name">Name</label>
                <input onChange={handleChange} value={name} type="text" name="name" id="name" />

                <label htmlFor="phone">Phone</label>
                <input onChange={handleChange} value={phone} type="text" name="phone" id="phone" />

                <label htmlFor="email">Email</label>
                <input onChange={handleChange} value={email} type="text" name="email" id="email" />

            </form>
            <section className='actions'>
                <Link to={`/contact`}>Back</Link>
                <button onClick={onSaveContact}>Save</button>
                <button onClick={onDetele}>Delete</button>
            </section>
        </section>
    )
}
