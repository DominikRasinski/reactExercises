import { useEffect, useReducer } from 'react';
import Header from './components/Header';
import { Main } from './components/Main';


type StatusUnion = 'loading' | 'ready' | 'error' | 'finished' | 'active';

const initialState = {
  questions: [],
  currentQuestion: 0,
  userAnswers: [],
  status: 'loading' as StatusUnion
}

type Action = 
| { type: "DATA_RECEIVED"; payload: any }
| { type: "DATA_ERROR"; payload: any }


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
    default:
      throw new Error("Action not found");
    
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

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
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}

export default App;
