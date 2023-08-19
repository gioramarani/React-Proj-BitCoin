import React from 'react'
import { Link } from 'react-router-dom'

const ContactPreview = ({ contact }) => {
    return (
        <section className='contact-preview'>
            <Link to={`/contact/${contact._id}`}>
                <p>{contact.name}</p>
                <img src={`https://robohash.org/${contact._id}`} alt="" />
            </Link>
        </section>

    )
}

export default ContactPreview