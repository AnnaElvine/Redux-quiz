import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const dispatch = useDispatch();

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }
  const displayNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }
  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }));
    if (question.correctAnswerIndex === answerIndex) {
      setTimeout(displayNextQuestion, 200);
    } else {
      setTimeout(displayNextQuestion, 200);
    }
  };
  // Jag försökte göra så att man ser om svaret är rätt
  // const isCorrect = (answerIndex) => {
  //   if (answerIndex === true) {
  //     return <p>Correct</p>
  //   } else {
  //     return <p>Wrong</p>
  //   }
  // }

  return (
    <div>
      <img src={question.questionImg} alt="" />
      {question.options.map((option, index) => {
        return (
          <button
            type="button"
            onClick={() => onAnswerSubmit(question.id, index)}>
            {option}
          </button>
        )
      })}
    </div>
  )
}
