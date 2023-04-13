import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { Summary } from './Summary'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const currentAnswer = useSelector((state) => state.quiz.answers[state.quiz.currentQuestionIndex])
  const over = useSelector((state) => state.quiz.quizOver)
  const dispatch = useDispatch();

  if (over) {
    return <Summary />
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }
  const displayNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }
  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }));
    if (question.correctAnswerIndex === answerIndex) {
      setTimeout(displayNextQuestion, 500);
    } else {
      setTimeout(displayNextQuestion, 500);
    }
  };

  const isCorrect = (index) => {
    if (currentAnswer) {
      if (currentAnswer.answerIndex === index) {
        if (currentAnswer.isCorrect) {
          return {
            background: '#63A241'
          };
        }
        return { background: '#F64E66' };
      }
      return {};
    }
    return {};
  };

  return (
    <div>
      <img src={question.questionImg} alt="" />
      {question.options.map((option, index) => {
        return (
          <>
            <button
              type="button"
              onClick={() => onAnswerSubmit(question.id, index)}
              style={isCorrect(index)}>
              {option}
            </button>
            {/* <h1>{isCorrect}</h1> */}
          </>
        )
      })}
    </div>
  )
}
