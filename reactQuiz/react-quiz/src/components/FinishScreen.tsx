import { Action } from "../App";

type FinishScreenProps = {
    points: number;
    maxPossiblePoints: number;
    highScore: number;
    dispatch: React.Dispatch<Action>;
}

export const FinishScreen = (props: FinishScreenProps) => {

    const { points, maxPossiblePoints, highScore, dispatch } = props;
    const percentage = (points / maxPossiblePoints) * 100;

    return (
        <>
            <p className="result">
                You scored <strong>{points}</strong> out of <strong>{maxPossiblePoints}</strong> points. ({Math.ceil(percentage)}%)
            </p>
            <p className="highscore">(Highscore: {highScore} points)</p>
            <button className="btn btn-ui" onClick={() => dispatch({type: "RESET_QUIZ"}) }>Restart</button>
        </>
    )
}
