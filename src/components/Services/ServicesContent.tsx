import React, { useState } from 'react'
import { Grid, Card, Typography, Box } from '@mui/material'
import { useSpring, animated } from 'react-spring'
import Confetti from 'react-confetti'
import { useWindowSize } from '@uidotdev/usehooks'

interface Service {
    title: string
    description: string
    icon: string
    details: string
}

const services: Service[] = [
    {
        title: 'Software Development',
        description: 'Cat delivers robust and scalable software solutions.',
        icon: '💻',
        details:
            'Cat specializes in custom software development, focusing on delivering high-quality, modern solutions tailored to meet the unique needs of clients. With expertise in a variety of programming languages and frameworks, Cat ensures that every software product is both scalable and maintainable.',
    },
    {
        title: 'UX/UI Design',
        description: 'Cat crafts intuitive and user-centered designs.',
        icon: '🎨',
        details:
            'Cat prioritizes creating user-friendly and visually appealing designs that enhance the overall user experience. By employing best practices in UX/UI design, Cat ensures that applications are not only functional but also aesthetically pleasing and easy to navigate.',
    },
    {
        title: 'Cloud & System Administration',
        description: 'Cat provides expert management of IT systems.',
        icon: '🛠️',
        details:
            `From cloud administration to bare metal management, Cat's extensive experience ensures that your IT infrastructure is efficiently maintained and secure. From configuring systems to performing regular updates and troubleshooting, having cat as a systems or cloud administrator will keep your operation running smoothly.`,
    },
    {
        title: 'Security Consultation',
        description: 'Cat offers comprehensive security assessments.',
        icon: '🔒',
        details:
            'Cat provides in-depth security consultation services, focusing on identifying and mitigating vulnerabilities within your systems. Through detailed security assessments and proactive measures, Cat helps safeguard your organization against potential threats.',
    },
]

interface ServiceCardProps {
    title: string
    description: string
    icon: string
    details: string
    incCardClick: () => void
}

const ServiceCard: React.FC<ServiceCardProps> = ({ incCardClick, title, description, icon, details }) => {
    const [flipped, setFlipped] = React.useState(false)

    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })

    const [{ boxShadow }, api] = useSpring(() => ({
        boxShadow: '0px 0px 0px #00000033',
        config: {
            mass: 1,
            friction: 26,
            tension: 270,
        },
    }))

    return (
        <Box
            sx={{
                perspective: '1000px',
                width: '100%',
                height: '100%',
                position: 'relative',
            }}
            onMouseEnter={() => {
                api.start({
                    boxShadow: '3px 3px 3px 0px #00000033',
                })
            }}
            onMouseLeave={() => {
                api.start({
                    boxShadow: '0px 0px 0px 0px #00000000',
                })
            }}
            onClick={() => {
                if (flipped) {
                    return
                } else {
                    incCardClick()
                    setFlipped(!flipped)
                }
            }}
        >
            <animated.div
                style={{
                    opacity: opacity.to((o) => 1 - o),
                    transform,
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    boxShadow: boxShadow,
                }}
            >
                <Card
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 2,
                        backgroundColor: '#f9f9f9',
                        cursor: 'pointer',
                    }}
                >
                    <Typography variant="h5" sx={{ fontSize: '3rem', mb: '1rem' }}>
                        {icon}
                    </Typography>
                    <Typography variant="h6" sx={{ fontFamily: 'VT323', fontSize: '2rem' }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" align="center" sx={{ fontFamily: 'Kanit', color: '#555' }}>
                        {description}
                    </Typography>
                </Card>
            </animated.div>
            <animated.div
                style={{
                    opacity,
                    transform: transform.to((t) => `${t} rotateY(180deg)`),
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    boxShadow: '-1px -1px -1px -1px #00001133',
                }}
            >
                <Card
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 4,
                        backgroundColor: '#fcfcfc',
                        // cursor: 'pointer',
                        boxShadow: 'none',
                    }}
                >
                    <Typography variant="h6" sx={{ mb: '2rem' }}>
                        {icon} &nbsp; {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#555' }} align="center">
                        {details}
                    </Typography>
                </Card>
            </animated.div>
        </Box>
    )
}

const ServicesGrid: React.FC = () => {
    const [cardsClicked, setCardsClicked] = useState(0)
    const incCardClick = () => setCardsClicked((s) => s + 1)
    const window = useWindowSize()
    const confetti = cardsClicked >= 4

    return (
        <Grid container spacing={2} sx={{ padding: 2 }}>
            {confetti && (
                <Confetti numberOfPieces={450} gravity={0.4} recycle={false} height={window.height || 0} width={window.width || 0} />
            )}
            {services.map((service) => (
                <Grid item xs={12} sm={6} md={6} key={service.title} sx={{ height: { xs: 300, sm: 340 } }}>
                    <ServiceCard
                        incCardClick={() => incCardClick()}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                        details={service.details}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default ServicesGrid
