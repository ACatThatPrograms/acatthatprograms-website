import React, { useContext } from 'react'
import { useSectionHeightCss } from '../../hooks/useSectionHeightCss'
import { NavHiderContext } from '../../context/navHiderContext'
import ServicesGrid from './ServicesContent'
import { Box, Container, Typography } from '@mui/material'

const Services: React.FC = () => {
    const { shouldHideNav } = useContext(NavHiderContext)
    const sectionHeightCss = useSectionHeightCss(shouldHideNav)

    return (
        <Box
            id="cat_services"
            sx={{ ...sectionHeightCss, display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center' }} // Adjust height for navigation and footer
        >
            <Container>
                <Typography sx={{textAlign: "center", fontFamily: 'VT323', fontSize: '3rem'}}>Available Services</Typography>
                <Typography variant="body2" sx={{textAlign: "center", mb: '1rem', color: "#555" }}>Click Cards To Learn More</Typography>

                <ServicesGrid />
            </Container>
        </Box>
    )
}

export default Services
