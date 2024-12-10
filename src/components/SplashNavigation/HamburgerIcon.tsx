import { useContext } from 'react'
import { NavHiderContext } from '../../context/navHiderContext'
import { Box, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export function HamburgerIcon() {
    const { setShouldHideNav } = useContext(NavHiderContext)

    return (
        <Box sx={{ position: 'absolute', top: '.6rem', left: '1.2rem' }}>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => {
                    setShouldHideNav && setShouldHideNav(false);
                }}
            >
                <MenuIcon />
            </IconButton>
        </Box>
    )
}
