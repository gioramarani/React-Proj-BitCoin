import React, { useState } from 'react';
import { userService } from '../services/userService';

export function SignupPage() {
    const [name, setName] = useState(''); 

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name);
        userService.signup(name)
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Please enter your name</label>
                <input type="text" value={name} onChange={handleChange} required />
                <button>Sign up</button>
            </form>
        </section>
    )
}