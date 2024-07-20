type ErrorProps = {
    message: string;
}

export const ErrorMessage = (props: ErrorProps) => {
    const {message} = props
    return (
        <p className="error">
            <span>❌</span> {message}
        </p>
    )
}