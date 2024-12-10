import React, { useState } from 'react'
import { Box, Typography, Divider } from '@mui/material'
import { useSpring, animated } from 'react-spring'

const quotes = [
    { quote: 'The impediment to action advances action. What stands in the way becomes the way.', author: 'Marcus Aurelius' },
    { quote: 'Individually, we are one drop. Together, we are an ocean.', author: 'Ryunosuke Satoro' },
    { quote: 'Think lightly of yourself and deeply of the world.', author: 'Miyamoto Musashi' },
    { quote: 'It is not important to be better than someone else, but to be better than yesterday.', author: 'Jigoro Kano' },
    { quote: 'In the midst of chaos, there is also opportunity.', author: 'Sun Tzu' },
]

const ModusOperandi: React.FC = () => {
    const [flipped, setFlipped] = useState(Array(quotes.length).fill(false))

    const toggleFlip = (index: number) => {
        setFlipped((prev) => prev.map((flip, i) => (i === index ? !flip : flip)))
        setTimeout( () => {
            setFlipped((prev) => prev.map((flip, i) => (i === index ? false : flip)))
        }, 1250)
    }

    return (
        <Box sx={{ mt: '2rem', mb: '2rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <Typography sx={{ fontFamily: 'VT323', fontSize: '2rem', mt: '1rem', mb: "1rem",color: '#555' }}>Modus Operandi</Typography>
            {quotes.map((item, index) => {
                const { transform, opacity } = useSpring({
                    opacity: flipped[index] ? 1 : 0,
                    transform: `rotateX(${flipped[index] ? 180 : 0}deg)`,
                    config: { mass: 5, tension: 500, friction: 80 },
                })

                return (
                    <Box
                        key={index}
                        sx={{
                            perspective: '1000px',
                            cursor: flipped[index] ? 'default' : 'pointer',
                        }}
                        onClick={() => toggleFlip(index)}
                    >
                        <animated.div
                            style={{
                                opacity: opacity.to((o) => 1 - o),
                                transform,
                                position: 'relative',
                                width: '100%',
                                backfaceVisibility: 'hidden',
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    fontSize: '.9rem',
                                    fontFamily: 'Kanit',
                                    color: '#666',
                                    fontStyle: 'italic',
                                    p: "1rem",
                                    transition: ".25s all ease-in",
                                    '&:hover': {
                                        background: "#fff"
                                    }
                                }}
                            >
                                "{item.quote}"
                            </Typography>
                        </animated.div>
                        <animated.div
                            style={{
                                opacity,
                                transform: transform.to((t) => `${t} rotateX(180deg)`),
                                position: 'absolute',
                                width: '100%',
                                top: 0,
                                backfaceVisibility: 'hidden',
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    fontSize: '.9rem',
                                    fontFamily: 'KanitBold',
                                    color: '#666',
                                    fontStyle: 'italic',
                                }}
                            >
                                {item.author}
                            </Typography>
                        </animated.div>
                        {index < quotes.length - 1 && <Divider sx={{ mt: '.25rem', mb: '.25rem' }} />}
                    </Box>
                )
            })}
        </Box>
    )
}

export default ModusOperandi
