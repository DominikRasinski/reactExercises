import { useEffect, useReducer } from 'react';
import Header from './components/Header';
import { Main } from './components/Main';
import Loader from './components/Loader';
import { ErrorNotify } from './components/ErrorNotify';
import { StartHeader } from './components/StartHeader';
import { Question } from './components/Question';
import { NextButton } from './components/NextButton';
import { ProgresBar } from './components/ProgresBar';

type StatusUnion = 'loading' | 'ready' | 'error' | 'finished' | 'active';

const initialState = {
  questions: [],
  currentQuestion: 0,
  answer: null,
  userAnswers: [],
  points: 0,
  status: 'loading' as StatusUnion
}

export type Action = 
| { type: "DATA_RECEIVED"; payload: any }
| { type: "DATA_ERROR"; payload: any }
| { type: "START_QUIZ" }
| { type: "NEW_ANSWER"; payload: any }
| { type: "NEXT_QUESTION" }


const reducer = (state: any, action: Action) => {
  switch (action.type) {
    case 'DATA_RECEIVED':
      return {
       ...state,
       questions: action.payload,
       status: 'ready'
      };
    case 'DATA_ERROR':
      return {
        ...state,
        status: 'error'
      };
    case 'START_QUIZ':
      return {
        ...state,
        status: 'active'
      };
    case 'NEW_ANSWER':

      const question = state.questions.at(state.currentQuestion);

      return {
        ...state,
        answer: action.payload,
        points: action.payload === question.correctOption ? state.points + question.points : state.points
      };
    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1, answer: null
      };
    default:
      throw new Error("Action not found");
    
  }
}

function App() {

  const [{questions, status, currentQuestion, userAnswers, answer, points}, dispatch] = useReducer(reducer, initialState);

  const questionNumber = questions.length;
  const maxPossiblePoints = questions.reduce((acc: number, question: any) => acc + question.points, 0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch('http://localhost:8000/questions');
        const data = await res.json();
        if (data) {
          dispatch({ type: 'DATA_RECEIVED', payload: data });
        }
      } catch (error) {
        dispatch({ type: 'DATA_ERROR', payload: error });
      }
    }
    fetchQuestions();
  }, []);

  return (
    <div className="App">
      <Header />
      <Main >
        {status === 'loading' && <Loader />}
        {status === 'ready' && <StartHeader questionNumber={questionNumber} dispatch={dispatch}/>}
        {status === 'error' && <ErrorNotify />}
        {status === 'active' && (
        <>
          <ProgresBar index={currentQuestion} total={questionNumber} points={points} maxPossiblePoints={maxPossiblePoints} answer={answer}/>
          <Question questions={questions[currentQuestion]} dispatch={dispatch} answer={answer}/>
          <NextButton dispatch={dispatch} answer={answer}/>
        </>
          )}
      </Main>
    </div>
  );
}

export default App;
