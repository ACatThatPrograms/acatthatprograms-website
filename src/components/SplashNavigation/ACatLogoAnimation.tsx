import { Box, Grid, Typography } from '@mui/material'
import ACatLogo from '../../assets/cat_logo.png'
import { useSpringRef, useSpring, animated } from '@react-spring/web'
import { useEffect } from 'react'
import { useWindowSize } from '@uidotdev/usehooks'
import { siteMobileBreakPoint } from '../../globals/siteGlobals'

export const animDoneEvent = new Event('LogoAnimationDone')
export const rushAnims = new Event('RushIntroAnims')

export function ACatLogoAnimation() {
    const size = useWindowSize()
    const isMobile = size.width && size.width < siteMobileBreakPoint

    const animationSpringConfiguration = {
        mass: 1,
        friction: 13,
        tension: 45,
    }

    const aSpringsApi = useSpringRef()
    const catSpringApi = useSpringRef()
    const thatSpringApi = useSpringRef()
    const programsSpringApi = useSpringRef()
    const everythingSpringApi = useSpringRef()
    const loaderSpringApi = useSpringRef()

    // Rush Anim
    useEffect(() => {
        const rushFx = () => {
            aSpringsApi.start()
            catSpringApi.start()
            thatSpringApi.start()
            programsSpringApi.start()
            document.dispatchEvent(animDoneEvent)
        }
        document.addEventListener('RushIntroAnims', rushFx)
        return () => {
            document.removeEventListener('RushIntroAnims', rushFx)
        }
    })

    const everythingSpring = useSpring({
        ref: everythingSpringApi,
        from: {
            top: '0px',
            opacity: 1,
        },
        to: [
            {
                top: '-200px',
                opacity: 0,
            },
            { display: 'none' },
        ],
        config: {
            ...animationSpringConfiguration,
        },
    })

    const loaderSpring = useSpring({
        ref: loaderSpringApi,
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
        loop: true,
        config: {
            mass: 1,
            friction: 1,
            tension: 100,
        },
    })

    // Letter A Spring
    const aSprings = useSpring({
        ref: aSpringsApi,
        from: {
            top: '-500px',
        },
        to: {
            top: '0px',
        },
        config: {
            ...animationSpringConfiguration,
        },
    })

    // Cat Image Spring
    const catSpring = useSpring({
        ref: catSpringApi,
        from: {
            opacity: '0',
        },
        to: [
            {
                opacity: '1',
            },
        ],
        config: {
            ...animationSpringConfiguration,
            tension: 25,
            friction: 35,
        },
    })

    // That Spring
    const thatSpring = useSpring({
        ref: thatSpringApi,
        from: {
            bottom: '-500px',
        },
        to: [
            {
                bottom: '0px',
            },
        ],
        onRest: () => {
            loaderSpringApi.start()
            setTimeout(() => {
                everythingSpringApi.start()
                document.dispatchEvent(animDoneEvent)
            }, 1500)
        },
        config: {
            ...animationSpringConfiguration,
            tension: 50,
        },
    })

    // That Spring
    const programsSpring = useSpring({
        ref: programsSpringApi,
        from: {
            bottom: '-500px',
        },
        to: [
            {
                bottom: '0px',
            },
        ],
        config: {
            ...animationSpringConfiguration,
        },
    })

    useEffect(() => {
        aSpringsApi.stop()
        setTimeout(() => {
            aSpringsApi.start()
        }, 250)
        setTimeout(() => {
            catSpringApi.start()
        }, 500)
        setTimeout(() => {
            thatSpringApi.start()
        }, 550)
        setTimeout(() => {
            programsSpringApi.start()
        }, 250)
    }, [])

    return (
        <Box
            sx={{ pointerEvents: 'all', color: 'white' }}
            onClick={() => {
                document.dispatchEvent(rushAnims)
            }}
        >
            <animated.div style={{ position: 'relative', ...everythingSpring }}>
                <animated.div style={{ marginTop: '1rem', fontFamily: 'vt323', textAlign: 'center', ...loaderSpring }}>
                    One Moment Please...
                </animated.div>
                <Grid container spacing={0} textAlign={'center'}>
                    <Grid item xs={12}>
                        <Box sx={{ position: 'relative', top: '72px' }}>
                            <animated.div style={{ position: 'relative', ...aSprings }}>
                                <Typography sx={{ fontFamily: 'VT323', fontSize: '6rem' }}>A</Typography>
                            </animated.div>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <animated.div style={{ ...catSpring }}>
                            <img src={ACatLogo} width={isMobile ? '256px' : '320px'} />
                        </animated.div>
                    </Grid>
                    <Grid item xs={12}>
                        <animated.div style={{ position: 'relative', ...thatSpring }}>
                            <Typography sx={{ fontFamily: 'VT323', fontSize: '2rem' }}>That</Typography>
                        </animated.div>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ position: 'relative', top: '-50px' }}>
                            <animated.div style={{ position: 'relative', ...programsSpring }}>
                                <svg width="500" height="120" viewBox="0 300 500 100" xmlns="http://www.w3.org/2000/svg">
                                    {' '}
                                    <path id="curve" d="M50,350 Q250,450 450,350" fill="transparent" />
                                    <text fontFamily="VT323" fontSize="5.5rem" width="500" fill="white">
                                        <textPath xlinkHref="#curve" startOffset="50%" text-anchor="middle">
                                            Programs
                                        </textPath>
                                    </text>
                                </svg>
                            </animated.div>
                        </Box>
                    </Grid>
                </Grid>
            </animated.div>
        </Box>
    )
}
