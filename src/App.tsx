import React, { useState } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import SplashNavigation from './components/SplashNavigation/SplashNavigation'
import Hero from './components/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer'
import theme from './theme'
import { NavHiderContext } from './context/navHiderContext'
import { HamburgerIcon } from './components/SplashNavigation/HamburgerIcon'
// CSS
import '@fortawesome/fontawesome-free/css/all.min.css'
import ResumeModal from './components/ResumeModal'

const App: React.FC = () => {
    const [shouldHideNav, setShouldHideNav] = useState(false)
    const [resumeModalOpen, setResumeModalOpen] = useState(false)

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <ResumeModal open={resumeModalOpen} handleClose={() => setResumeModalOpen(false)} />
                <NavHiderContext.Provider value={{ shouldHideNav, setShouldHideNav }}>
                    <SplashNavigation />
                    <HamburgerIcon />
                    <main>
                        <Hero openResumeModal={() => setResumeModalOpen(true)} />
                        <About />
                        <Services />
                        <Contact />
                    </main>
                </NavHiderContext.Provider>
                <Footer />
            </ThemeProvider>
        </>
    )
}

export default App
