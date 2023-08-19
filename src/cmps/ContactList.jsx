import React from 'react'
import ContactPreview from "./ContactPreview";


export function ContactList({ contacts, onSelectContactId }) {

    console.log(contacts);
    return (
        <section className="contact-list simple-cards-grid">
           {contacts.map(contact => 
             <ContactPreview key={contact._id} contact={contact} onSelectContactId={onSelectContactId}/> 
           )}
        </section>
    )
}