import React from 'react'
// import { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material/'
import { Link } from 'react-router-dom';

const QuizesHub = (theme) => {
    // const [quiz, setQuiz] = useState(null);

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch("https://v1tso.github.io/quizzler-json-server/db.json");
    //         const json = await response.json();
    //         setQuiz(json);
    //         console.log(json.title)
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }

    return (

        <Box marginLeft='1rem' marginRight='1rem' marginTop='2rem'>
            <Typography variant="h2" color="text.primary" marginBottom='1rem' fontWeight='bold'>Hey There</Typography>
            <Typography variant="h4" color="text.primary" marginBottom='3rem'>Check out what is the next quiz that you are going to do!</Typography>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="200"
                    image="https://images.unsplash.com/photo-1511829036323-0bb54ebc3639?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                    alt="Your Dream Home is ..."
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Your Dream Home is ...
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Find out what your dream home is with these simple questions!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box m="auto">
                        <Link to="/1" className='link'>
                            <Button variant="contained" size="small">Start!</Button>
                        </Link>
                        <Button variant="outlined" size="small">Share</Button>
                    </Box>
                </CardActions>
            </Card>

        </Box>

    )
}

export default QuizesHub