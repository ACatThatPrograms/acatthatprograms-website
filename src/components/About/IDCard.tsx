import React, { useState } from 'react'
import { Card, CardContent, Typography, Avatar, Grid, Link } from '@mui/material'
import { animated, useSpring } from 'react-spring'

interface IDCardProps {
    name: string
    title: string
    twitterTag?: string
    bio: string
    avatarUrl?: string
    websiteUrl?: string // Optional prop for the website URL
    contactPrompt?: boolean
    altClickFx?: () => void
}

const IDCard: React.FC<IDCardProps> = ({ name, title, twitterTag, bio, avatarUrl, websiteUrl, contactPrompt = false, altClickFx }) => {
    const [showVisit, setShowVisit] = useState(false)

    const [{ opacity, boxShadow }, api] = useSpring(() => ({
        opacity: 0.8, // Initial numeric value
        boxShadow: '1px 1px 1px 1px #00000011',
        config: {
            mass: 1,
            friction: 26,
            tension: 270,
        },
    }))

    return (
        <Link
            href={websiteUrl}
            onClick={altClickFx ? () => {altClickFx()} : undefined}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: 'none', m: '.5rem', background: "",display: "flex" }}
            onMouseLeave={() => {
                setShowVisit(false)
                api.start({
                    opacity: 0.8,
                    boxShadow: '1px 1px 1px 1px #00000011',
                })
            }}
            onMouseEnter={() => {
                setShowVisit(true)
                api.start({
                    opacity: 1,
                    boxShadow: '3px 3px 3px 0px #00000033',
                })
            }}
        >
            <animated.div style={{ opacity, boxShadow, background: "" }}>
                <Card sx={{ display: "flex", height: "100%", maxWidth: 320, padding: 2, backgroundColor: '#fff', boxShadow: 0, cursor: 'pointer', minHeight: '230px', flex: 1 }}>
                    <CardContent sx={{ padding: '8px 16px' }}>
                        <Grid container spacing={1} alignItems="center">
                            <Grid item>
                                <Avatar
                                    alt={name}
                                    src={avatarUrl}
                                    sx={{ width: 56, height: 56, border: '1px solid #555', filter: 'drop-shadow(0 0 0.1rem #00000022)' }}
                                />
                            </Grid>
                            <Grid item xs>
                                <Typography variant="h6" component="div" sx={{ fontSize: '1.1rem', marginBottom: 0.5, color: '#353535aa' }}>
                                    {name}
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
                                    {title}
                                </Typography>
                                {twitterTag && (
                                    <Link
                                        href={`https://twitter.com/${twitterTag}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        color="primary"
                                        sx={{ fontSize: '0.85rem' }}
                                    >
                                        @{twitterTag}
                                    </Link>
                                )}
                            </Grid>
                        </Grid>
                        <Typography variant="body2" color="text.secondary" sx={{ marginTop: 2, fontSize: '0.85rem' }}>
                            {bio}
                        </Typography>
                        {websiteUrl && (
                            <Typography
                                variant="body2"
                                color="primary"
                                sx={{ marginTop: 2, fontSize: '0.85rem', opacity: showVisit ? 1 : 0.6, transition: '.3s all ease-in-out' }}
                            >
                                Click To Visit Website
                            </Typography>
                        )}
                        {contactPrompt && (
                            <Typography
                                variant="body2"
                                color="primary"
                                sx={{ marginTop: 2, fontSize: '0.85rem', opacity: showVisit ? 1 : 0.6, transition: '.3s all ease-in-out' }}
                            >
                                Click To Contact Me
                            </Typography>
                        )}
                    </CardContent>
                </Card>
            </animated.div>
        </Link>
    )
}

export default IDCard
