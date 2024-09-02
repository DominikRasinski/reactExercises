import { Action } from "../App"

type NextButtonProps = {
    dispatch: React.Dispatch<Action>;
    answer: any;
    numberOfQuestions: number;
    index: number;
}


export const NextButton = (props: NextButtonProps) => {
    const {dispatch} = props;

    if (props.answer === null) {
        return null;
    }

    if (props.index < props.numberOfQuestions - 1) {
        return ( 
            <button className="btn btn-ui" onClick={() => dispatch({type: 'NEXT_QUESTION'})}>Next</button>
        )
    }
    return  <button className="btn btn-ui" onClick={() => dispatch({type: 'FINISH_QUIZ'})}>Finish</button>
}