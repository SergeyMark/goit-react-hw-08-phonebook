const style = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 500,
        fontSize: 48,
        textAlign: 'center',
    }
};

export default function Home() {
    return(
        <div style={style.container}>
            <h1 style={style.title}>Welcom to phonebook</h1>
        </div>
    )
}