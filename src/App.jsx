// import './App.css'
import { Navigate, Route, HashRouter as Router, Routes } from 'react-router-dom'
import './assets/scss/global.scss'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { AppHeader } from './cmps/AppHeader'
import { ContactDetails } from './pages/ContactDetails'
import { ContactEdit } from './pages/ContactEdit'
import { Stats } from './pages/Stats'
import { SignupPage } from './pages/SignupPage'
import { userService } from './services/userService'
import { useEffect } from 'react'

function App() {

    // useEffect(() => {
    //     IsUserLoggenedIn()
    // }, [])

    // function IsUserLoggenedIn() {
    //     const answer = userService.getLoggedInUser()
    //     console.log(answer);
    //     return answer
    // }

    return (
        <Router>
            <section className="main-app">
                <AppHeader />

                <main className="container">
                    
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/contact' element={<ContactPage />} />
                        <Route path='/contact/:id' element={<ContactDetails />} />
                        <Route path='/contact/edit/:id?' element={<ContactEdit />} />
                        <Route path='/stats' element={<Stats />} />
                    </Routes>
                </main>

                <footer>
                    <section className="container">
                        MisterBITCoin Rights 2023 &copy;
                    </section>
                </footer>

            </section>
        </Router>
    )
}

export default App
