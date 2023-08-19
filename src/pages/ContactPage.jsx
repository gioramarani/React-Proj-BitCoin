import { useEffect, useState } from "react"
import { contactService } from "../services/contactService"
import { ContactList } from "../cmps/ContactList"
import { ContactFilter } from "../cmps/ContactFilter"
import { Link } from 'react-router-dom'
import Carousel from "../cmps/Carousel"


export function ContactPage() {

    const [contacts, setContacts] = useState(null)
    // const [selectedContactId, setSelectedContactId] = useState(null)

    const [filterBy, setFilterBy] = useState({
        term: '',
    })

    useEffect(() => {
        loadContacts()
    }, [filterBy])

    async function loadContacts() {
        const contacts = await contactService.getContacts(filterBy)
        console.log(filterBy);
        setContacts(contacts)
    }

    function onChangeFilter(filterBy) {
        setFilterBy({ ...filterBy })
    }

    // function onSelectContactId(contactId) {
    //     setSelectedContactId(contactId)
    // }

    if (!contacts) return <div>Loading...</div>
    return (
        <section className="contact-page">
            <ContactFilter onChangeFilter={onChangeFilter} filterBy={filterBy} />
            {/* <ContactList contacts={contacts} /> */}
            <Carousel contacts={contacts}/>
            <Link to="/contact/edit" className="add-btn btn">Add contact</Link>

        </section>
    )
}