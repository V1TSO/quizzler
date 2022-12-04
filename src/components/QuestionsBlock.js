import QuestionBlock from "./QuestionBlock";
import Typography from '@mui/material/Typography';

const QuestionsBlock = ({ quizItem, setChosenAnswerItems, chosenAnswerItems, setUnansweredQuestionsIds, unansweredQuestionsIds }) => {
    return (
        <>
            <Typography variant="h4" id={quizItem.id} className='question-title' > {quizItem.text}</Typography>
            <div className='questions-container'>
                {quizItem.questions.map((question, _index) => (
                    <QuestionBlock
                        key={_index}
                        quizItemId={quizItem.id}
                        question={question}
                        setChosenAnswerItems={setChosenAnswerItems}
                        chosenAnswerItems={chosenAnswerItems}
                        setUnansweredQuestionsIds={setUnansweredQuestionsIds}
                        unansweredQuestionsIds={unansweredQuestionsIds}
                    />
                ))}
            </div>
        </>
    )
}

export default QuestionsBlock