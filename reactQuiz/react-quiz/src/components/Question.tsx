type QuestionsArray = {
    question: string;
    options: string[];
    correctOption: number;
    points: number;
};

interface QuestionProps {
    questions: QuestionsArray;
}

export const Question = (props: QuestionProps) => {

    const {questions} = props;

    return (
        <div>
            <h4>{questions.question}</h4>
            <div className="options">
                {questions.options.map((option, index) => (
                    <button key={index} className="btn btn-option">{option}</button>
                ))}
            </div>
        </div>
    )
}