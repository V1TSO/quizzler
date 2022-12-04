import Title from "./Title";
import { useState, useEffect } from "react";
import QuestionsBlock from "./QuestionsBlock";
import AnswerBlock from "./AnswerBlock";
import axios from "axios";
import { Box } from '@mui/material/'

const App = () => {
  const [quiz, setQuiz] = useState(null);
  const [chosenAnswerItems, setChosenAnswerItems] = useState([]);
  const [unansweredQuestionsIds, setUnansweredQuestionsIds] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [answer, setAnswer] = useState(null);


  const fetchData = async () => {
    try {
      const response = await fetch("https://v1tso.github.io/quizzler-json-server/db.json");
      const json = await response.json();
      setQuiz(json);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    handleAnswer()
    if (quiz) {
      const unansweredQuestions = quiz.content.map((quizItem) => {
        return quizItem.id;
      });
      setUnansweredQuestionsIds(unansweredQuestions);
    }
  }, [quiz]);

  useEffect(() => {
    if (unansweredQuestionsIds) {
      if (unansweredQuestionsIds.length <= 0 && chosenAnswerItems.length >= 1) {
        handleAnswer()
        setShowAnswer(true);
        const answerBlock = document.getElementById("answer-block")
        answerBlock?.scrollIntoView({ behavior: "smooth" })
        console.log(chosenAnswerItems)
      }
      const highestId = Math.min(...unansweredQuestionsIds);
      const highestElement = document.getElementById(highestId);
      highestElement?.scrollIntoView({ behavior: "smooth" });
    }
  }, [unansweredQuestionsIds, showAnswer, chosenAnswerItems]);


  const handleAnswer = async (answer) => {
    if (chosenAnswerItems) {
      let items = ""
      chosenAnswerItems.map(quizItem => {
        items += quizItem + " "
      })
      console.log(items)
      axios.get(`https://ai-now-production.up.railway.app/api/quiz?input=${items}`)
        .then((response) => {
          setAnswer(response.data);
        })
        .catch((error) => {
          // console.log(error);
        });
    }
  }




  return (
    <Box marginLeft='1rem' marginRight='1rem' marginTop='2rem' marginBottom='4rem' >
      <div className="quiz">
        <Title title={quiz?.title} subtitle={quiz?.subtitle} />
        {quiz?.content?.map(contentItem => (
          <QuestionsBlock
            key={contentItem.id}
            quizItem={contentItem}
            setChosenAnswerItems={setChosenAnswerItems}
            chosenAnswerItems={chosenAnswerItems}
            unansweredQuestionsIds={unansweredQuestionsIds}
            setUnansweredQuestionsIds={setUnansweredQuestionsIds}
          />
        ))}
        {showAnswer && (
          <AnswerBlock
            answerOptions={quiz?.answers}
            chosenAnswers={chosenAnswerItems}
            answer={answer}
          />
        )}
      </div>
    </Box>
  );
}

export default App;
