import { useEffect, useReducer } from 'react';
import Header from './components/Header';
import { Main } from './components/Main';
import Loader from './components/Loader';
import { ErrorNotify } from './components/ErrorNotify';
import { StartHeader } from './components/StartHeader';
import { Question } from './components/Question';
import { NextButton } from './components/NextButton';
import { ProgresBar } from './components/ProgresBar';
import { FinishScreen } from './components/FinishScreen';
import Footer from './components/Footer';
import { Timer } from './components/Timer';

type StatusUnion = 'loading' | 'ready' | 'error' | 'finished' | 'active';

const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  currentQuestion: 0,
  answer: null,
  userAnswers: [],
  points: 0,
  highScore: 0,
  secondsRemaining: null,
  status: 'loading' as StatusUnion
}

export type Action = 
| { type: "DATA_RECEIVED"; payload: any }
| { type: "DATA_ERROR"; payload: any }
| { type: "START_QUIZ" }
| { type: "NEW_ANSWER"; payload: any }
| { type: "NEXT_QUESTION" }
| { type: "FINISH_QUIZ" }
| { type: "RESET_QUIZ" }
| { type: "TIMER_TICK" }

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
        status: 'active',
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
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
    case 'FINISH_QUIZ':
      return {
        ...state,
        status: 'finished', highScore: state.points > state.highScore ? state.points : state.highScore
      };
    case 'RESET_QUIZ':
      return {
        ...initialState, questions: state.questions, highScore: state.highScore, status: 'ready'
      };
    case 'TIMER_TICK':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? 'finished' : state.status
      };
    default:
      throw new Error("Action not found");
    
  }
}

function App() {

  const [{questions, status, currentQuestion, secondsRemaining, answer, points, highScore}, dispatch] = useReducer(reducer, initialState);

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
          <Footer>
            <Timer dispatch={dispatch} secondsRemaining={secondsRemaining}/>
            <NextButton dispatch={dispatch} answer={answer} index={currentQuestion} numberOfQuestions={questionNumber}/>
          </Footer>
        </>
          )}
        {status === 'finished' && (
          <FinishScreen points={points} maxPossiblePoints={maxPossiblePoints} highScore={highScore} dispatch={dispatch}/>
        )}
      </Main>
    </div>
  );
}

export default App;
