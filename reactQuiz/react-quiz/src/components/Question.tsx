import { Action } from "../App";

type QuestionsArray = {
    question: string;
    options: string[];
    correctOption: number;
    points: number;
};

interface QuestionProps {
    questions: QuestionsArray;
    dispatch: React.Dispatch<Action>;
    answer: any;
}

export const Question = (props: QuestionProps) => {

    const {questions, dispatch, answer} = props;
    const hasAnswer = answer !== null;

    return (
        <div>
            <h4>{questions.question}</h4>
            <div className="options">
                {questions.options.map((option, index) => (
                    <button key={option} 
                        className={`btn btn-option ${index === answer ? 'answer' : ''}
                        ${hasAnswer && (index === questions.correctOption ? 'correct' : 'wrong')}`}
                        disabled={hasAnswer} 
                        onClick={() => dispatch({type: "NEW_ANSWER", payload: index})}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    )
}