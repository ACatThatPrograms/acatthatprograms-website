import React, { useContext } from 'react'
import catLogo from '../../assets/cat_logo_inverted.png'
import benAvatar from '../../assets/ben.jpg'
import crownAvatar from '../../assets/crown.png'
import ollieAvatar from '../../assets/ollie_logo.png'
import ACatAvatar from '../../assets/cat_avatar.png'
import { Typography, Box, Grid, Container, Divider } from '@mui/material'
import { useSectionHeightCss } from '../../hooks/useSectionHeightCss'
import { NavHiderContext } from '../../context/navHiderContext'
import IDCard from './IDCard'
import TechWrapper from './AboutTechWrapper'
import { clickScrollerFactory } from '../../util/clickScrollerFactory'
import { useIsMobile } from '../../hooks/useIsMobile'
import ModusOperandi from './ModusOperandi'

const About: React.FC = () => {
    const { shouldHideNav } = useContext(NavHiderContext)
    const sectionHeightCss = useSectionHeightCss(shouldHideNav)
    const isMobile = useIsMobile()
    const contactScrollFx = clickScrollerFactory(document.getElementById('root'), document.getElementById('cat_contact'), isMobile)

    return (
        <Box
            id={'cat_about'}
            sx={{
                display: 'flex',
                alignContent: 'center',
                background: '#f5f5f5',
                ...sectionHeightCss,
            }}
        >
            <Container maxWidth={'xl'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: '4rem' }}>
                <Grid container spacing={8}>
                    <Grid item xs={12} md={12} lg={6}>
                        <Box sx={{ display: 'flex', flexFlow: 'column', height: '100%', textAlign: 'center' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: '2rem' }}>
                                <Typography variant="h2" sx={{ fontFamily: 'VT323', fontSize: '4rem' }}>
                                    About
                                </Typography>
                                <img src={catLogo} alt={`CatLogo Spacer`} style={{ width: 50, height: 50, marginLeft: '2rem' }} />
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    height: '100%',
                                    flex: 1,
                                    flexFlow: 'column',
                                    justifyContent: 'space-around',
                                }}
                            >
                                <Typography variant="body2" sx={{ fontSize: '1rem', fontFamily: 'Kanit', color: '#333' }}>
                                    Cat is a highly skilled programmer specializing in building scalable and efficient software systems.
                                    With a strong focus on engineering excellence, Cat leads founders and their teams in delivering
                                    high-quality solutions across a range of industries. Known for a commitment to success beyond
                                    expectations, Cat's peers affectionately refer to them by their nickname, which stems from their
                                    long-standing dedication to animal adoption and rescue efforts.
                                </Typography>
                                <Typography variant="body2" sx={{ fontSize: '1rem', fontFamily: 'Kanit', mt: "2rem", color: '#555' }}>
                                    Outside of work, Cat's dedication to karate, music, and gardening has shaped his calm, disciplined
                                    demeanor. The principles he embraces—patience, humility, and self-improvement—extend far beyond the dojo
                                    and garden, and are ever present in his interactions and approach to both his professional and personal
                                    life.
                                </Typography>
                                <Box>
                                    <Divider sx={{mt: "2rem"}} />
                                    <Typography sx={{ mt: '2rem', fontFamily: 'VT323', fontSize: '2rem', mb: '2rem', color: '#555' }}>
                                        Frequent Accomplices
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontSize: '.9rem', fontFamily: 'Kanit', color: '#666' }}>
                                        I've had the privilege of collaborating extensively with these folk on numerous innovative projects.
                                        Together, we have co-founded companies, tackled joint ventures, and created exceptional solutions
                                        across various industries. If you're considering a large-scale project, there's a possibility that
                                        we can coordinate our efforts to bring your vision to life with remarkable results.
                                    </Typography>
                                    <Box sx={{ mt: '4rem' }}>
                                        <Grid container textAlign={'center'}>
                                            <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                                                <IDCard
                                                    avatarUrl={benAvatar}
                                                    bio="An exceptionally skilled programmer, accomplished technical leader, and founder of multiple ventures."
                                                    name="Cybourgeoisie"
                                                    title=""
                                                    twitterTag="cybourgeoisie"
                                                    websiteUrl="http://cybourgeoisie.com/"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                                                <IDCard
                                                    avatarUrl={crownAvatar}
                                                    bio="An unstoppable force in the world of cybersecurity, specializing in backend development and scripting"
                                                    name="Cr0wnGh0ul"
                                                    title=""
                                                    twitterTag="cr0wn_gh0ul"
                                                    websiteUrl="https://troysalem.com/"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                                                <IDCard
                                                    avatarUrl={ollieAvatar}
                                                    bio="An exceptional illustrator and designer, known for creating visually stunning, imaginative works and books."
                                                    name="Olliewollie"
                                                    title=""
                                                    websiteUrl="https://olliewollie.art/"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                                                <IDCard
                                                    avatarUrl={ACatAvatar}
                                                    contactPrompt
                                                    bio="This is me, but it could be you if we work together a lot. Lets form a powerful product team, contact me below."
                                                    name="ACatThatPrograms"
                                                    title=""
                                                    altClickFx={() => contactScrollFx()}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h2" sx={{ fontFamily: 'VT323', fontSize: '4rem', mb: '2rem' }}>
                                Trusty Toolbox
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            <TechWrapper />
                        </Box>
                        <Box>
                            <ModusOperandi />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default About
