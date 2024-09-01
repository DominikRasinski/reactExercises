type ProgresBarProps = {
    index: number;
    total: number;
    points: number;
    maxPossiblePoints: number;
    answer: any;
}


export const ProgresBar = (props: ProgresBarProps) => {
    return (
        <div className="progress">
            <progress value={props.index + Number(props.answer !== null)} max={props.total}></progress>
            <p>Question <strong>{props.index + 1}</strong> / {props.total}</p>
            <p><strong>{props.points}</strong> / {props.maxPossiblePoints}</p>
        </div>
    )
};