import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Link } from '@mui/material';

const NavigationBar: React.FC<{ title: string }> = ({ title }) => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#000' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ fontFamily: 'VT323', fontSize: '1rem', flexGrow: 1 }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          {showTop && <Link href="#top" color="inherit">Top</Link>}
          <Link href="#about" color="inherit">About</Link>
          <Link href="#services" color="inherit">Services</Link>
          <Link href="#contact" color="inherit">Contact</Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
