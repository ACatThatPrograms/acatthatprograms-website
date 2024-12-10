import React, { useContext } from 'react'
import { Grid, Typography } from '@mui/material'
import { useSectionHeightCss } from '../../hooks/useSectionHeightCss'
import { NavHiderContext } from '../../context/navHiderContext'
import ContactForm from './ContactForm'

const Contact: React.FC = () => {
    const { shouldHideNav } = useContext(NavHiderContext)
    const sectionHeightCss = useSectionHeightCss(shouldHideNav)

    return (
        <Grid
            id="cat_contact"
            container
            alignItems="center"
            justifyContent="center"
            style={{ ...sectionHeightCss, background: '#EEE', marginBottom: '32px' }} // Adjust height for navigation and footer
        >
            <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{mb: "2rem", fontFamily: "VT323"}}>Contact Cat</Typography>
                <ContactForm/>
            </Grid>
        </Grid>
    )
}

export default Contact
