import { useEffect } from "react"
import { Action } from "../App"


type TimerProps = {
    dispatch: React.Dispatch<Action>;
    secondsRemaining: number;
};


export const Timer = (props: TimerProps) => {
    const { dispatch, secondsRemaining } = props;

    const mins = Math.floor(secondsRemaining / 60);
    const secs = secondsRemaining % 60;

    useEffect(() => {
        const id = setInterval(() => {
            dispatch({ type: "TIMER_TICK" });
        }, 1000);

        return () => clearInterval(id);

    }, [dispatch]);

    return (
        <div className="timer">
            <p>{mins < 10 && '0'}{mins}:{secs < 10 && '0'}{secs}</p>
        </div>
    )
}