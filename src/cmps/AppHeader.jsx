import { Link, NavLink } from "react-router-dom"


export function AppHeader(props) {

    const headerAttrs = { className: 'app-header', id: 'Header' }
    return (
        <header {...headerAttrs}>

            <section className="container">
                <h1 className="logo">MisterBITCoin</h1>
                <nav>
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/contact">Contacts</NavLink>
                    <NavLink to="/stats">Stats</NavLink>
                </nav>
            </section>
        </header>
    )
}
