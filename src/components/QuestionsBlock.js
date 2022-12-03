import QuestionBlock from "./QuestionBlock";

const QuestionsBlock = ({ quizItem, setChosenAnswerItems, chosenAnswerItems, setUnansweredQuestionsIds, unansweredQuestionsIds }) => {
    return (
        <>
            <h2 h2 id={quizItem.id} className='question-title' > {quizItem.text}</h2>
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