import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { useSpring, animated, useSpringRef } from '@react-spring/web'
import { usePrevious, useWindowSize } from '@uidotdev/usehooks'
import { useContext, useEffect, useRef, useState } from 'react'
import useDebouncedEffect from '../../hooks/useDebounceEffect'
import { ACatLogoAnimation } from './ACatLogoAnimation'
import { NavHiderContext } from '../../context/navHiderContext'
import { clickScrollerFactory } from '../../util/clickScrollerFactory'
import { useIsMobile } from '../../hooks/useIsMobile'

const SplashNavigation: React.FC = () => {
    const [animDone, setAnimDone] = useState(false)
    const [textTyped, setTextTyped] = useState(false)
    const [navAutoCollapse, setNavAutoCollapse] = useState(false)
    const rootDivRef = useRef<HTMLElement | null>()
    const [shouldStartTyping, setShouldStartTyping] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0)
    const prevScrollPosition = usePrevious(scrollPosition)
    const scrollDirection = prevScrollPosition < scrollPosition ? 'down' : 'up'

    // NavHider Context
    const { shouldHideNav, setShouldHideNav } = useContext(NavHiderContext)

    // Notable Divs
    const scrollerDiv = document.getElementById('root')

    // Spring APIs
    const shrinkSpringsApi = useSpringRef()
    const textSpringApi = useSpringRef()
    const navSpringApi = useSpringRef()

    // Window Size State / Hooks
    const size = useWindowSize()
    const isMobile = useIsMobile()

    // Text Typing Handler State
    const [displayedText, setDisplayedText] = useState('')
    const textToType = (!isMobile ? 'const ' : '') + 'ACatThatPrograms = new FullStackDeveloper();' // Shorter Text For Mobile

    const animationSpringConfiguration = {
        mass: 1,
        friction: 18,
        tension: 85,
    }

    // Prevent screen scroll until animation done
    useEffect(() => {
        rootDivRef.current = document.getElementById('root')
        if (rootDivRef.current && !animDone) {
            rootDivRef.current.style.overflow = 'hidden'
        }
    }, [])

    //////////////
    // Effects //
    ////////////

    // Nav Hider State Tracker
    useEffect(() => {
        if (navAutoCollapse && setShouldHideNav) {
            setShouldHideNav(true)
        } else if (setShouldHideNav) {
            setShouldHideNav(false)
        }
    }, [navAutoCollapse, setShouldHideNav])

    // Immediately prevent shrinkSprings & textSprings from running and set scroll heigh to top
    useEffect(() => {
        shrinkSpringsApi.stop()
        textSpringApi.stop()
        navSpringApi.stop()
        if (scrollerDiv) {
            scrollerDiv.scrollTop = 0
        }
    }, [])

    // Scroll Checker
    useDebouncedEffect(
        () => {
            if (scrollerDiv) {
                const autoScrollFx = () => {
                    // If user scrolls >= 100 pixels make sure hideNav state is set, else show nav
                    setScrollPosition(scrollerDiv.scrollTop)
                    if (scrollerDiv.scrollTop >= 150) {
                        setNavAutoCollapse(true)
                    } else {
                        setNavAutoCollapse(false)
                    }
                }
                scrollerDiv.addEventListener('scroll', () => autoScrollFx())
                return scrollerDiv.removeEventListener('scroll', () => autoScrollFx())
            }
        },
        50,
        [navAutoCollapse, setNavAutoCollapse, scrollPosition, prevScrollPosition, scrollerDiv, setScrollPosition, scrollDirection]
    )

    // Text animation handling effect
    useEffect(() => {
        if (shouldStartTyping) {
            if (textTyped) {
                setDisplayedText(textToType)
            } else {
                let currentIndex = 0
                const animateText = () => {
                    if (currentIndex <= textToType.length) {
                        const textToDisplay = textToType.substring(0, currentIndex)
                        setDisplayedText(textToDisplay)
                        currentIndex++
                    } else {
                        // Completed
                        navSpringApi.start()
                        clearInterval(intervalId)
                    }
                }
                // Start the animation right away
                animateText()
                // Set typing cadence
                const typingCadence = (Math.random() * (130 - 111) + 111) * 0.25
                const intervalId = setInterval(animateText, typingCadence)
                return () => clearInterval(intervalId)
            }
        }
    }, [size.width, size.height, shouldStartTyping])

    // Eventy Catching From Animation Logo Completion Custom Event
    useEffect(() => {
        const evFunction = () => {
            shrinkSpringsApi.start()
            if (rootDivRef.current) {
                rootDivRef.current.style.overflow = 'auto'
            }
        }
        document.addEventListener('LogoAnimationDone', evFunction)
        return () => {
            document.removeEventListener('LogoAnimationDone', evFunction)
        }
    })

    // Rush Anim
    useEffect(() => {
        const rushFx = () => {
            navSpringApi.start()
            textSpringApi.start()
        }
        document.addEventListener('RushIntroAnims', rushFx)
        return () => {
            document.removeEventListener('RushIntroAnims', rushFx)
        }
    })

    // On window resize, re-run shrink animation to appropriately size navigation
    useDebouncedEffect(
        () => {
            if (textTyped) {
                shrinkSpringsApi.start()
            }
        },
        100,
        [shouldHideNav]
    )

    ////////////////////////
    // Animation Springs //
    //////////////////////

    // Simple screen shrink spring -- Used for black background only
    const shrinkSprings = useSpring({
        ref: shrinkSpringsApi,
        from: {
            height: size.height ? size.height + 'px' : window.innerHeight + 'px',
        },
        to: [{ height: shouldHideNav ? '0px' : isMobile ? '96px' : '48px', padding: shouldHideNav ? '0rem' : '0.5rem' }],
        config: {
            ...animationSpringConfiguration,
        },
        onRest: () => textSpringApi.start(),
    })

    // Typed text spring
    const textSprings = useSpring({
        ref: textSpringApi,
        from: {
            left: '50%',
            transform: 'translateX(-50%)',
        },
        to: {
            left: '0%',
            transform: 'translateX(0%)',
        },
        config: { ...animationSpringConfiguration },
        onRest: () => {
            setTextTyped(true)
        },
        onStart: () => {
            setShouldStartTyping(true)
        },
    })

    // Navigation Items controller
    const navSprings = useSpring({
        ref: navSpringApi,
        from: {
            right: '-75%',
            transform: 'translateX(75%)',
        },
        to: {
            right: '0%',
            transform: 'translateX(0%)',
        },
        config: { ...animationSpringConfiguration },
        onRest: () => {
            setAnimDone(true)
        },
        onStart: () => {
            navSpringApi.start()
        },
    })

    ////////////////////////
    // Text Type Handler //
    //////////////////////

    const AnimatedText = () => {
        const colorizeText = (text: string) => {
            const colorMap: any = {
                const: '#C678DD',
                ACatThatPrograms: '#D19A66',
                new: '#C678DD',
                '=': '#56B6C2',
                FullStackDeveloper: '#61AFEF',
                '()': '#E5C07B',
            }
            const keys = Object.keys(colorMap).map((key) => key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'))
            const regex = new RegExp(`(${keys.join('|')})`, 'g')
            const parts = text.split(regex)
            return parts.map((part, index) => {
                if (colorMap[part]) {
                    return (
                        <span key={index} style={{ color: colorMap[part] }}>
                            {part}
                        </span>
                    )
                } else {
                    return (
                        <span key={index} style={{ color: '#ABB2BF' }}>
                            {part}
                        </span>
                    )
                }
            })
        }
        return <span style={{ fontSize: isMobile ? '16px' : '18px' }}>{colorizeText(displayedText)}</span>
    }

    /////////////////////////////////
    // Navigation Item Generation //
    ///////////////////////////////

    const NavigationItems = () => {
        const genItem = (text: string, onClick: () => void) => (
            <Button
                variant="text"
                key={text}
                color={'primary'}
                sx={{
                    color: 'white',
                    height: '32px',
                    mr: '2rem',
                    fontSize: '18px',
                    fontFamily: 'VT323',
                    ':last-child': { mr: '0rem' },
                }}
                onClick={onClick}
                size="small"
            >
                {text}
            </Button>
        )
        const linkItems = [
            genItem('Top', clickScrollerFactory(scrollerDiv, document.getElementById('cat_' + 'top'), isMobile)),
            genItem('About', clickScrollerFactory(scrollerDiv, document.getElementById('cat_' + 'about'), isMobile)),
            genItem('Services', clickScrollerFactory(scrollerDiv, document.getElementById('cat_' + 'services'), isMobile)),
            genItem('Contact', clickScrollerFactory(scrollerDiv, document.getElementById('cat_' + 'contact'), isMobile)),
        ]

        return <Box>{linkItems}</Box>
    }

    //////////////////
    // MAIN RETURN //
    ////////////////

    return (
        <animated.div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                zIndex: 10,
                background: shouldHideNav ? 'black' : 'black',
                width: '100%',
                padding: '.5rem',
                overflow: 'hidden',
                ...shrinkSprings,
            }}
        >
            <Container maxWidth={'xl'}>
                <Grid container spacing={2} justifyContent={'space-between'}>
                    <Grid xs={12} md={6} justifyContent={'center'} item>
                        <animated.div style={{ position: 'relative', ...textSprings, background: '', textAlign: 'center' }}>
                            <Typography sx={{ fontFamily: 'VT323' }} color="white" fontSize={'18px'}>
                                <AnimatedText />
                            </Typography>
                        </animated.div>
                    </Grid>
                    <Grid xs={12} md={6} item>
                        <animated.div style={{ position: 'relative', ...navSprings }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <NavigationItems />
                            </Box>
                        </animated.div>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        position: 'absolute',
                        left: 0,
                        top: isMobile ? -80 : 0, // Offset loader in mobile
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: -1,
                    }}
                >
                    <ACatLogoAnimation />
                </Box>
            </Container>
        </animated.div>
    )
}

export default SplashNavigation
