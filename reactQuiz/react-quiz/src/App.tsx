import { useEffect, useReducer, useState } from 'react';
import Header from './components/Header';
import { Main } from './components/Main';
import Loader from './components/Loader';
import { ErrorNotify } from './components/ErrorNotify';
import { StartHeader } from './components/StartHeader';
import { Question } from './components/Question';

type StatusUnion = 'loading' | 'ready' | 'error' | 'finished' | 'active';

const initialState = {
  questions: [],
  currentQuestion: 0,
  userAnswers: [],
  status: 'loading' as StatusUnion
}

export type Action = 
| { type: "DATA_RECEIVED"; payload: any }
| { type: "DATA_ERROR"; payload: any }
| { type: "START_QUIZ" }


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
    default:
      throw new Error("Action not found");
    
  }
}

function App() {

  const [{questions, status, currentQuestion}, dispatch] = useReducer(reducer, initialState);

  const questionNumber = questions.length;

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
        {status === 'active' && <Question questions={questions[currentQuestion]}/>}
      </Main>
    </div>
  );
}

export default App;
