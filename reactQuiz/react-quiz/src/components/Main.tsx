// TODO musi obslugiwac children

type MainProps = {
    children: React.ReactNode;
}

export const Main = (props: MainProps) => {
    return (
        <main className='main'>
            {props.children}
        </main>
    )
}