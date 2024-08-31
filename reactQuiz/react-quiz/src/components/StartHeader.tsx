import { Action } from '../App';

type StartHeaderProps = {
    questionNumber: number;
    dispatch: React.Dispatch<Action>;
}

export const StartHeader = (props: StartHeaderProps) => {

    const {questionNumber, dispatch} = props;

    return (
        <div className="start">
            <h2>Welcome to The React Quiz</h2>
            <h3>{questionNumber} questions to test your React mastery</h3>
            <button className="btn btn-ui" onClick={() => dispatch({type: "START_QUIZ"})}>Let's start!</button>
        </div>
    );
}