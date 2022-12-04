import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material/'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <Box marginLeft='1rem' marginRight='1rem' marginTop='12rem' textAlign='center' >
            <Typography variant="h2" color="text.primary" marginBottom='1rem' fontWeight='bold'>Quizzler</Typography>
            <Link to="/hub" className='link'>
                <Button variant="contained" >
                    Start Now!
                </Button>
            </Link>
        </Box >
    )
}

export default Landing
