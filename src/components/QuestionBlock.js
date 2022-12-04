import React from 'react'

const QuestionBlock = ({ quizItemId, question, setChosenAnswerItems, chosenAnswerItems, unansweredQuestionsIds, setUnansweredQuestionsIds }) => {

    const handleClick = () => {
        setChosenAnswerItems((prevState) => [...prevState, question.text])
        setUnansweredQuestionsIds((prevState) => prevState.filter((id) => id !== quizItemId))
    }

    const validPick = !chosenAnswerItems?.includes(question.text) && !unansweredQuestionsIds?.includes(quizItemId)

    return (
        <button
            className='question-block'
            onClick={handleClick}
            disabled={validPick}
        >
            <img src={question.image} alt='mg' />
            <h3>{question.text}</h3>
            <p>
                <a href='{question.image}'>{question.credit}</a>
            </p>
        </button>
    )
}

export default QuestionBlock