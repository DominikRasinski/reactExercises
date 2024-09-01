import { Action } from "../App"

type NextButtonProps = {
    dispatch: React.Dispatch<Action>;
    answer: any;
}


export const NextButton = (props: NextButtonProps) => {
    const {dispatch} = props;

    if (props.answer === null) {
        return null;
    }

    return ( 
        <button className="btn btn-ui" onClick={() => dispatch({type: 'NEXT_QUESTION'})}>Next</button>
    )
}