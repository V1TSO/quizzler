import React from 'react';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material/'
import { Container } from '@mui/material';

const About = () => {

    return (
        <Box marginLeft='1rem' marginRight='1rem' marginTop='2rem'>
            <Typography variant="h2" color="text.primary" marginBottom='1rem' fontWeight='bold'>About</Typography>
            <Typography variant="h5" color="text.primary" marginBottom='3rem'>Quizzler is a web app about quizzes that lets you learn more about yourself and test your knowledge. All the responses are made using AI.</Typography>
            <Typography variant="h4" color="text.primary" marginBottom='1rem' fontWeight='bold'>VR:</Typography>
            <Typography fontStyle='italic' variant="h5" color="text.primary" marginBottom='3rem'>"This is a project that I made to learn more about API's, Node.js, React and mui styling"</Typography>
            <Stack direction="row" spacing={2} sx={{ bottom: "5rem", position: 'fixed' }}>
                <Avatar
                    alt="Vicente Renasco"
                    src="https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                    sx={{ width: 100, height: 100 }}
                />
                <Typography paddingTop='1.25rem' variant="h5" color="text.primary" marginBottom='3rem'>Made with ❤️ by Vicente Renasco</Typography>
            </Stack>
        </Box>
    );
};

export default About;