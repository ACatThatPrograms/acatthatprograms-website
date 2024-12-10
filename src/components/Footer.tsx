import React from 'react'
import { Link, Typography } from '@mui/material'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer
            style={{
                textAlign: 'center',
                padding: '1rem',
                position: 'fixed',
                bottom: 0,
                width: '100%',
                background: 'black',
                height: '28px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                textDecorationColor: "grey",
                textDecoration: "none"
            }}
        >
            <Typography variant="body2" style={{ color: 'grey', fontSize: '11px' }}>
                © {currentYear} ACatThatPrograms
            </Typography>
            <div style={{ fontSize: '14px' }}>
                <Link
                    href="https://twitter.com/catthatprograms"
                    style={{ marginRight: '1rem', color: 'grey' }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Twitter
                </Link>
                <Link href="https://github.com/acatthatprograms" style={{ color: 'grey' }} target="_blank" rel="noopener noreferrer">
                    GitHub
                </Link>
            </div>
        </footer>
    )
}

export default Footer
