import React from 'react'
import { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material/'

const AnswerBlock = ({ answerOptions, chosenAnswers, answer }) => {

    const [result, setResult] = useState(null)

    useEffect(() => {
        if (answer) {
            setResult(answer)
        }
    }, [answer])

    console.log(answer)

    if (result != null)
        return (
            <Box id='answer-block' className='answer-block'>
                <Box padding='1rem'>
                    <Typography color="text.primary" marginBottom='1rem' fontWeight='bold' variant='h4'>Ai Generated Photo</Typography>
                    <Typography color="text.secondary" marginBottom='1rem' variant='h6'>Coming soon...</Typography>
                    <Typography color="text.primary" marginBottom='1rem' fontWeight='bold' variant='h4'>Ai Generated Description</Typography>
                    <Typography color="text.secondary" marginBottom='1rem' variant='h6'>{result}</Typography>
                </Box>
            </Box>
        )
    else
        return (
            <div id='answer-block' className='answer-block'  >
                <h2>Loading...</h2>

            </div>
        )
}

export default AnswerBlock  