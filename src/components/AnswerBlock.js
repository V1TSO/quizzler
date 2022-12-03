import React from 'react'
import { useState, useEffect } from "react";

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
            <div id='answer-block' className='answer-block'  >
                <h2>{result}</h2>

            </div>
        )
    else
        return (
            <div id='answer-block' className='answer-block'  >
                <h2>Loading...</h2>

            </div>
        )
}

export default AnswerBlock  