import React from 'react'
import { BottomNavigationAction } from '@mui/material';
import { BottomNavigation } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RestoreIcon from '@mui/icons-material/Restore';
import { useState, useEffect, useCallback } from 'react'
import { useLocation, Link } from 'react-router-dom';


const BotNav = (theme) => {
    const [value, setValue] = useState(null);

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/hub') setValue(1);
        else if (location.pathname === '/about') setValue(2);
        else if (location.pathname === '/') setValue(0);
    }, [location]);

    const handleChange = useCallback((event, newValue) => {
        setValue(newValue);
    }, [setValue]);

    return (
        <div>
            <BottomNavigation
                showLabels
                value={value}
                onChange={handleChange}
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    width: 1,
                    left: 0

                }}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to="/" />
                <BottomNavigationAction label="Quizzes" icon={<RestoreIcon />} component={Link} to="/hub" />
                <BottomNavigationAction label="About Us" icon={<FavoriteIcon />} component={Link} to="/about" />
            </BottomNavigation>
        </div>
    )
}

export default BotNav
