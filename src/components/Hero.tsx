import React, { useState, useEffect, useContext } from 'react'
import { Grid, Typography, Button, Container, Box, Theme } from '@mui/material'
import LanderImage from '../assets/DeskCat.gif'
import { FaCat } from 'react-icons/fa'
import { useSectionHeightCss } from '../hooks/useSectionHeightCss'
import { useTheme } from '@emotion/react'
import { NavHiderContext } from '../context/navHiderContext'
import { useIsMobile } from '../hooks/useIsMobile'
import { clickScrollerFactory } from '../util/clickScrollerFactory'

interface HeroProps {
    openResumeModal: () => void
}

const Hero: React.FC<HeroProps> = ({ openResumeModal }) => {
    const { shouldHideNav } = useContext(NavHiderContext)
    const [coffeeCount, setCoffeeCount] = useState(1)
    const sectionHeightCss = useSectionHeightCss(shouldHideNav)
    const theme = useTheme() as Theme
    const isMobile = useIsMobile()

    const scrollToContact = clickScrollerFactory(document.getElementById("root"), document.getElementById("cat_contact"), isMobile)

    useEffect(() => {
        setTimeout(() => {
            const interval = setInterval(() => {
                setCoffeeCount((prevCount) => prevCount + 1)
            }, 5600)
            return () => clearInterval(interval)
        }, 5600 / 2) //5600 is gif length
    }, [])

    return (
        <Container maxWidth={'xl'}>
            <Grid
                id="cat_top"
                container
                spacing={0}
                alignContent={'center'}
                justifyContent={'center'}
                style={{ ...sectionHeightCss }} // Adjust height for navigation and footer
            >
                <Grid item xs={12} md={6} sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center', flexFlow: 'column' }}>
                    <Box>
                        <Typography
                            variant="body2"
                            sx={{
                                color: theme.palette.text.secondary,
                                marginBottom: '.5rem',
                                fontSize: '1.5rem',
                                fontFamily: 'VT323',
                                mt: { xs: '3rem', md: '0rem' },
                            }}
                        >
                            Home Of
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{
                                color: theme.palette.primary.main,
                                fontSize: '3.5rem',
                                marginBottom: { xs: '0rem', md: '1rem' },
                                fontFamily: 'VT323',
                            }}
                        >
                            ACatThatPrograms{' '}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                display: { xs: 'none', md: 'block' },
                                color: theme.palette.text.secondary,
                                fontFamily: 'VT323',
                                fontSize: '1.5rem',
                                textAlign: 'center',
                            }}
                        >
                            Deploys, Maintains, Administrates, and Fixes*
                        </Typography>
                        <Typography
                            sx={{
                                display: { xs: 'none', md: 'block' },
                                textAlign: 'center',
                                color: theme.palette.text.secondary,
                                fontFamily: 'VT323',
                                mt: '1rem',
                            }}
                        >
                            <span style={{ verticalAlign: 'super', fontSize: '.95rem', fontWeight: '900' }}>* Catnip Deposit Required</span>
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            fullWidth={isMobile}
                            variant="contained"
                            color="primary"
                            onClick={scrollToContact}
                            sx={{
                                py: 2,
                                mt: { xs: '2rem', md: '5rem' },
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontFamily: 'Kanit',
                                maxWidth: { xs: '384px', md: '100%' },
                                minWidth: { xs: '1px', md: '380px' },
                            }}
                            startIcon={<FaCat style={{ marginRight: '1rem' }} />}
                            endIcon={<FaCat style={{ marginLeft: '1rem' }} />}
                        >
                            <span style={{ position: 'relative', top: '2px' }}>
                                <span style={{ textDecoration: 'line-through' }}>Adopt</span> Hire A Cat Today
                            </span>
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} display="flex" justifyContent="center">
                    <Box sx={{ display: 'flex', justifyContent: 'center', flexFlow: 'column', maxWidth: '384px' }}>
                        <Button
                            fullWidth
                            size="large"
                            variant="outlined"
                            color="secondary"
                            onClick={openResumeModal}
                            sx={{
                                py: 1,
                                marginBottom: '2rem',
                                fontFamily: 'Kanit',
                                mt: isMobile ? '2rem' : '0rem',
                            }}
                        >
                            Looking For A Resume?
                        </Button>
                        <img
                            src={LanderImage}
                            alt="Lander"
                            style={{
                                width: '100%',
                                border: '2px solid #ccc',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                marginBottom: '1rem',
                            }}
                        />
                        <Typography
                            variant="body2"
                            sx={{ fontFamily: 'VT323', fontSize: '20px', textAlign: 'center', pb: { xs: '1rem', md: '0rem' } }}
                        >
                            Cups of coffee = {coffeeCount}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Hero
